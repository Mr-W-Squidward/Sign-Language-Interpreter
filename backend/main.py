import cv2
import mediapipe as mp
from mediapipe.framework.formats import landmark_pb2

# Define Constants
mp_drawing = mp.solutions.drawing_utils
mp_hands = mp.solutions.hands
mp_task = mp.tasks

# Define Gesture Recognizer
model_path = r'asl_alphabet.task'

BaseOptions = mp_task.BaseOptions
ClassifierOptions = mp_task.components.processors.ClassifierOptions
GestureRecognizer = mp_task.vision.GestureRecognizer
GestureRecognizerOptions = mp_task.vision.GestureRecognizerOptions
VisionRunningMode = mp_task.vision.RunningMode

# Video Feed
cap = cv2.VideoCapture(0)
width = cap.get(cv2.CAP_PROP_FRAME_WIDTH)
height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)

MARGIN = 10  # pixels
FONT_SIZE = 1
FONT_THICKNESS = 1
HANDEDNESS_TEXT_COLOR = (88, 205, 54) # vibrant green

def draw_landmarks_on_image(frame, detection_result):
  hand_landmarks_list = detection_result.hand_landmarks
  handedness_list = detection_result.handedness
  gesture_categories = detection_result.gestures

  # Loop through the detected hands to visualize.
  for idx in range(len(hand_landmarks_list)):
    hand_landmarks = hand_landmarks_list[idx]
    handedness = handedness_list[idx]

    # Draw the hand landmarks.
    hand_landmarks_proto = landmark_pb2.NormalizedLandmarkList()
    hand_landmarks_proto.landmark.extend([
      landmark_pb2.NormalizedLandmark(x=landmark.x, y=landmark.y, z=landmark.z) for landmark in hand_landmarks
    ])
    
    drawing_styles = mp.solutions.drawing_styles

    mp_drawing.draw_landmarks(
      frame,
      hand_landmarks_proto,
      mp_hands.HAND_CONNECTIONS,
      drawing_styles.get_default_hand_landmarks_style(),
      drawing_styles.get_default_hand_connections_style())

    # Get the top left corner of the detected hand's bounding box.
    x_coordinates = [landmark.x for landmark in hand_landmarks]
    y_coordinates = [landmark.y for landmark in hand_landmarks]
    rect_x = int(min(x_coordinates) * width)
    rect_y = int(min(y_coordinates) * height)
    rect_w = int(max(x_coordinates) * width)
    rect_h = int(max(y_coordinates) * height)

    #Current Gesture
    current_gesture = gesture_categories[idx][0].category_name

    # Bounding Box
    cv2.rectangle(frame, (rect_x, rect_y), (rect_w, rect_h), HANDEDNESS_TEXT_COLOR, 2)

    # Draw handedness (left or right hand) on the image.
    cv2.putText(frame, f"{handedness[0].category_name}: {current_gesture}",
                (rect_x, rect_y - MARGIN), cv2.FONT_HERSHEY_DUPLEX,
                FONT_SIZE, HANDEDNESS_TEXT_COLOR, FONT_THICKNESS, cv2.LINE_AA)

options = GestureRecognizerOptions(
   
    base_options=BaseOptions(model_asset_path=model_path),
    running_mode=VisionRunningMode.VIDEO,
    num_hands = 4,
    min_tracking_confidence = 0.3,
    min_hand_presence_confidence = 0.7,
    custom_gesture_classifier_options=ClassifierOptions(score_threshold=0.65)
)
with GestureRecognizer.create_from_options(options) as recognizer:
    while True:
        ret, frame = cap.read()

        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=frame)
        gesture_recognition_result = recognizer.recognize_for_video(mp_image, int(cap.get(cv2.CAP_PROP_POS_MSEC)))
        
        draw_landmarks_on_image(frame, gesture_recognition_result)

        if cv2.waitKey(1) & 0xff == ord('q') or not ret:
            break

        cv2.imshow("Hand Tracking", frame)

    cap.release()
    cv2.destroyAllWindows()