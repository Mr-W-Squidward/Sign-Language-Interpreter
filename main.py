import cv2
import mediapipe as mp
import math

mp_pose = mp.solutions.pose # tracks body
mp_drawing = mp.solutions.drawing_utils # 4 drawing output
mp_hands = mp.solutions.hands

cap = cv2.VideoCapture(0)

with mp_hands.Hands(min_detection_confidence=0.8, min_tracking_confidence=0.5) as hands:
  while cap.isOpened():
    ret, frame = cap.read() # return value/frame -> the image is the frame

    # BGR to RGB
    image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    image.flags.writeable = False

    # Actual detections
    results = hands.process(image)
    image.flags.writeable = True

    # Recolor to BGR

    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    print(results.multi_hand_landmarks)

    # Rendering
    if results.multi_hand_landmarks:
      for num, hand in enumerate(results.multi_hand_landmarks):
        mp_drawing.draw_landmarks(image, hand, mp_hands.HAND_CONNECTIONS)


    cv2.imshow('Hand Tracking', image)

    if cv2.waitKey(3) & 0xFF == ord('q'):
      break

  cap.release()
  cv2.destroyAllWindows()

# make detections of hand with mediapipe -> check if the hand sign compares to "hello", wave from forehead