const Flower = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560" id="flower">
    <defs>
      <style>
        .path{
          fill:#fff;
        }
      </style>
    </defs>
    <g id="flower" data-name="flower">
      <path id="petal-1" class="path"
        d="M306.25,159.23c.17-6.38.25-12.83.25-19.23,0-29.12-1.64-57-4.76-80.76C312.79,26.15,324.08,6.39,332,6.39a4.6,4.6,0,0,1,.84.08c8.12,1.55,11.58,25.07,9.26,62.93a655,655,0,0,0-29,69.78C310.67,145.86,308.4,152.59,306.25,159.23Z" />
      <path
        d="M332,6.89a3.74,3.74,0,0,1,.75.07c7.72,1.47,11.12,25.35,8.86,62.31a656,656,0,0,0-29,69.74c-2,5.6-3.9,11.23-5.73,16.82.11-5.26.17-10.56.17-15.83,0-29.1-1.64-57-4.74-80.71,5.37-16.08,10.94-29.37,16.1-38.45,6.56-11.53,11-13.95,13.59-13.95m0-1c-8.45,0-19.87,20.78-30.72,53.31C304.24,82,306,109.9,306,140c0,7.74-.12,15.34-.34,22.74,2.42-7.64,5-15.46,7.85-23.4a651.35,651.35,0,0,1,29-69.81c2.26-36.84-.94-61.89-9.66-63.55a4.91,4.91,0,0,0-.94-.09Z" />
      <path id="petal-2" class="path"
        d="M228.72,555.61a4.8,4.8,0,0,1-.85-.08c-4.9-.93-8.25-10.41-9.45-26.67,11-15.07,23.75-39.5,36.15-69,.87,15.77,2.24,30.48,4.07,43.73-10.95,32.57-22.14,52-29.92,52Z" />
      <path
        d="M254.19,462.05c.87,14.93,2.19,28.87,3.94,41.5-5.33,15.84-10.85,28.92-16,37.85-6.49,11.33-10.9,13.71-13.45,13.71A3.67,3.67,0,0,1,228,555c-2.7-.51-7.44-4.59-9-26,10.71-14.76,23.15-38.41,35.26-66.95m.76-4.39c-12.81,30.77-26,55.93-37,71.05C219.08,545,222.37,555,227.78,556a4.91,4.91,0,0,0,.94.09c8.38,0,19.67-20.42,30.43-52.46-1.89-13.63-3.33-29.17-4.2-46Z" />
      <path id="petal-3" class="path"
        d="M525.07,343.12c-20.61-12.14-49.21-25.24-80.78-37,20-.65,39.3-2.13,56-4.3,35.73,11.75,56.14,23.58,54.6,31.65C553.87,338.7,543.28,342.12,525.07,343.12Z" />
      <path
        d="M500.22,302.32c41.68,13.71,55.31,25,54.15,31.05-.93,4.9-11.56,8.26-29.18,9.24-20.11-11.83-47.78-24.56-78.37-36.09,19.07-.69,37.43-2.13,53.4-4.2m.09-1c-17.11,2.23-37,3.76-58.59,4.39,33.57,12.39,62.79,25.88,83.22,37.93,18.08-1,29.32-4.32,30.42-10.07,1.66-8.68-20.24-20.82-55.05-32.25Z" />
      <path id="petal-4" class="path"
        d="M56,258.7C23.08,247.48,4.34,236.2,5.8,228.54c1.21-6.33,16.45-10,41.8-10,4.22,0,8.75.1,13.45.3,20,11.41,47,23.66,76.29,34.62C107.73,253.61,79.64,255.4,56,258.7Z" />
      <path
        d="M47.6,219.08c4.18,0,8.66.1,13.31.29,19.44,11.08,45.45,22.94,73.72,33.65C106,253.22,79,255,56,258.19c-32.06-11-51.1-22.28-49.71-29.56.55-2.87,5.67-9.55,41.31-9.55m0-1c-25,0-41,3.45-42.29,10.37-1.59,8.31,18.38,19.77,50.59,30.76C79.32,255.94,108.44,254,140,254h.1c-31.36-11.62-58.88-24.19-78.91-35.61-4.77-.21-9.31-.31-13.59-.31Z" />
      <path id="petal-5" class="path"
        d="M398.07,199.74a640.15,640.15,0,0,0,53.08-59.61c24-12.11,42.91-18.78,53.19-18.78,3.79,0,6.33.9,7.54,2.68,3.87,5.7-5.56,20.24-25.88,39.91-23.79,7.44-51.26,18.49-79.43,31.94-3,1.42-6,2.89-9,4.38Z" />
      <path
        d="M504.34,121.85c3.62,0,6,.83,7.13,2.47,3.66,5.38-6,20-25.73,39.18C462,171,434.5,182,406.35,195.43c-2.08,1-4.2,2-6.32,3a637.23,637.23,0,0,0,51.45-58c23.9-12,42.67-18.67,52.86-18.67m0-1c-10.55,0-29.74,6.88-53.52,18.88a635.52,635.52,0,0,1-53.11,59.66l-2.7,2.69q5.79-2.9,11.77-5.75c29.06-13.87,56.68-24.82,79.49-32,19.91-19.26,30.23-34.43,26-40.63-1.33-2-4-2.9-7.95-2.9Z" />
      <path id="petal-6" class="path"
        d="M57,440.78c-3.79,0-6.33-.91-7.54-2.69C46,433,53.47,420.36,70,403.46c19.44-3.87,45.92-12.65,74.78-24.78a574.21,574.21,0,0,0-38.29,45.15C84.27,434.76,66.69,440.78,57,440.78Z" />
      <path
        d="M142.85,380c-13.91,15-26.53,29.92-36.68,43.39C84.06,434.3,66.59,440.28,57,440.28c-3.61,0-6-.83-7.13-2.47-3.31-4.88,4.12-17.23,20.41-33.88,19-3.81,44.6-12.25,72.59-23.89m3.92-2.73c-30.31,12.85-57.47,21.81-77,25.7C53.35,419.75,45.21,432.75,49,438.37c1.33,2,4,2.91,7.95,2.91,10,0,27.77-6.19,49.85-17.06a572.56,572.56,0,0,1,39.94-46.91Z" />
      <path id="petal-7" class="path"
        d="M434.63,513.12c-4.31,0-11-3.62-19.45-10.46-3.87-20-13-47.47-25.77-77.61,11.26,10.09,22.17,19.18,32.46,27.05,16.64,33.11,22.55,55.61,15.82,60.18a5.32,5.32,0,0,1-3.06.84Z" />
      <path
        d="M390.74,426.91c10.64,9.48,21,18,30.74,25.51,16.23,32.33,22.33,55.1,15.93,59.45a4.86,4.86,0,0,1-2.78.75c-4.17,0-10.74-3.54-19-10.24-3.81-19.55-12.61-46.2-24.9-75.47m-2.67-3.74c13.47,31.52,22.8,59.76,26.66,79.76,8.43,6.89,15.31,10.69,19.9,10.69a5.85,5.85,0,0,0,3.34-.92c7.26-4.93.53-28.64-15.7-60.93-10.63-8.11-22.19-17.75-34.2-28.6Z" />
      <path id="petal-8" class="path"
        d="M211.84,174.29c-3.87-4-7.81-8.07-11.76-12-21.16-21.16-42.58-40.13-61.93-54.86-15.61-31.62-21-53.14-14.52-57.57a5.37,5.37,0,0,1,3.06-.84c9,0,27.36,15.08,50.26,41.38,7.41,22.71,17.94,48.58,30.46,74.81C208.85,168.2,210.33,171.25,211.84,174.29Z" />
      <path
        d="M126.69,49.5c8.76,0,27.37,15.37,49.82,41.13,7.41,22.71,17.94,48.56,30.45,74.77q1.48,3.09,3,6.23-4.72-4.9-9.54-9.72c-21.14-21.14-42.54-40.1-61.89-54.83-15.22-30.85-20.82-52.62-14.63-56.82a4.79,4.79,0,0,1,2.78-.76m0-1a5.78,5.78,0,0,0-3.34.93c-7.06,4.79-.89,27.36,14.4,58.3,18.6,14.15,40.12,33,62,54.89q7.25,7.24,14,14.41-3-5.92-5.88-12.06c-13-27.1-23.35-53-30.48-74.84C155,64.42,136.1,48.5,126.69,48.5Z" />
      <path id="petal-9" class="path"
        d="M253.5,138.74c-15-31-31.37-59.46-46.17-80.21-3.21-42.94,4.14-49.44,7.45-50.23a4.29,4.29,0,0,1,1.07-.13c9.57,0,25.31,28.45,40.09,72.5C254.35,98.94,253.53,118.46,253.5,138.74Z" />
      <path
        d="M215.85,8.67c9.35,0,24.88,28.28,39.59,72.06-1.53,17.6-2.35,36.37-2.43,55.84-14.75-30.25-30.71-57.89-45.19-78.22-2.19-29.45.46-48,7.08-49.57a4.26,4.26,0,0,1,.95-.11m0-1a5.15,5.15,0,0,0-1.18.14c-7.57,1.83-10,21.39-7.82,50.9,14.56,20.4,31.3,49.22,47.15,82.22V140c0-21.23.88-41.36,2.45-59.39C241.83,37,226,7.67,215.85,7.67Z" />
      <path id="petal-10" class="path"
        d="M344.82,551.83c-9.72,0-25.66-29.08-40.63-74.08,1.53-18.19,2.31-37.62,2.31-57.75,0-20.33-.79-39.88-2.34-58.17,6.6,17.75,14.82,37,23.89,56,6.24,13.05,12.75,25.75,19.37,37.75,9.52,55,8.9,93.57-1.54,96.08A4.16,4.16,0,0,1,344.82,551.83Z" />
      <path
        d="M305,365.36c6.38,16.82,14.14,34.9,22.65,52.72,6.22,13,12.73,25.72,19.35,37.71,10.85,62.75,7,93.45-1.18,95.43a4.33,4.33,0,0,1-.95.11c-4.55,0-10.94-7.13-18-20.07S312,499.65,304.7,477.69c1.53-18.18,2.3-37.59,2.3-57.69,0-19-.69-37.37-2.05-54.64m-1.62-7.23C305,376.79,306,397.79,306,420c0,20.61-.83,40.19-2.31,57.81,14.76,44.45,30.81,74.52,41.13,74.52a5.15,5.15,0,0,0,1.18-.14c11-2.66,11.23-42.91,1.9-96.74-6.48-11.74-13-24.43-19.4-37.8-10-21-18.53-41.28-25.17-59.52Z" />
      <path id="petal-11" class="path"
        d="M478.8,255.9c-18.5-1.59-38.28-2.4-58.8-2.4-4.05,0-8.13,0-12.18.1,7.17-3.15,14.42-6.47,21.59-9.89a656,656,0,0,0,66.32-36.2c9.21-.85,17.59-1.28,24.89-1.28,19,0,30.14,2.92,31.42,8.22C554.34,224,525.6,240.27,478.8,255.9Z" />
      <path
        d="M520.62,206.73c18.46,0,29.73,2.86,30.93,7.84,2.21,9.13-27,25.53-72.81,40.82C460.26,253.8,440.5,253,420,253c-3.23,0-6.48,0-9.73.06,6.44-2.85,12.93-5.84,19.35-8.9A654.32,654.32,0,0,0,495.9,208c9.15-.84,17.46-1.26,24.72-1.26m0-1c-7.35,0-15.78.43-25.06,1.29a653.16,653.16,0,0,1-66.37,36.24c-8.09,3.86-16.07,7.49-23.86,10.88Q412.56,254,420,254c21,0,41,.86,58.86,2.41,45.79-15.28,76.12-31.89,73.66-42.08-1.39-5.8-13.2-8.6-31.9-8.6Z" />
      <path id="petal-12" class="path"
        d="M40,353.77c-19,0-30.13-2.92-31.41-8.22C6.33,336,35,319.76,81.73,304.15c18.34,1.56,38,2.35,58.27,2.35,12.9,0,25.66-.33,38-1-8,3.47-16.07,7.16-24.09,11a676,676,0,0,0-60.17,32.37C73,352.08,54.46,353.77,40,353.77Z" />
      <path
        d="M81.79,304.65C100.12,306.21,119.7,307,140,307c11.95,0,23.79-.28,35.27-.83-7.17,3.15-14.41,6.47-21.59,9.89a676.69,676.69,0,0,0-60.14,32.35c-20.63,3.18-39.13,4.86-53.5,4.86-18.45,0-29.72-2.86-30.93-7.84-2.2-9.12,27-25.5,72.68-40.78m-.12-1c-45.71,15.27-76,31.85-73.53,42,1.4,5.8,13.2,8.6,31.9,8.6,14.4,0,32.88-1.66,53.85-4.9A668.66,668.66,0,0,1,154.11,317c9-4.33,18-8.36,26.64-12.09-12.9.73-26.58,1.12-40.75,1.12-20.82,0-40.58-.85-58.33-2.36Z" />
      <path id="petal-13" class="path"
        d="M361.33,161.53q.84-2.33,1.67-4.68c11-31.09,19.63-62,24.32-87.08,16.37-18.72,29.29-29,36.37-29a5.13,5.13,0,0,1,2.74.71c8.35,5.1-.39,36.77-22.28,80.69C390.1,134,375.7,147.2,361.33,161.53Z" />
      <path
        d="M423.69,41.24a4.69,4.69,0,0,1,2.48.63c8,4.88-1,37-22.42,79.95-13.53,11.38-27.37,24.08-41.2,37.79.31-.87.62-1.73.92-2.59,11-31.06,19.62-62,24.31-87,16-18.28,29.09-28.76,35.91-28.76m0-1c-7.46,0-20.77,10.93-36.84,29.3-4.52,24.26-12.85,54.71-24.32,87.14-.81,2.29-1.62,4.55-2.44,6.8l.85-.86c15-15,29.79-28.55,43.61-40.16,21.43-43,31.05-76,22.14-81.44a5.66,5.66,0,0,0-3-.78Z" />
      <path id="petal-14" class="path"
        d="M137.62,519.1a5.17,5.17,0,0,1-2.74-.7c-8.4-5.14.47-37.07,22.61-81.37,14-11.8,28.31-25,42.59-39.3,13.61-13.61,26.26-27.26,37.64-40.63-6.3,14.51-12.37,30-18.05,46s-10.71,32-14.93,47.23c-29.29,41.75-55.63,68.72-67.12,68.72Z" />
      <path
        d="M236,359.93C230.11,373.57,224.49,388,219.2,403c-5.68,16-10.7,31.91-14.92,47.18-14.28,20.35-28.11,37.55-40,49.75-11.76,12-21.22,18.69-26.65,18.69a4.63,4.63,0,0,1-2.47-.63c-3.86-2.36-3.79-11.5.19-25.74,4-14.45,11.83-33.42,22.56-54.88,14-11.8,28.28-25,42.53-39.26,12.77-12.77,24.7-25.58,35.53-38.16m3.6-5.77c-11.55,13.72-25,28.39-39.84,43.22-14.62,14.62-29.08,27.91-42.63,39.34-21.66,43.31-31.43,76.63-22.47,82.1a5.59,5.59,0,0,0,3,.78c11.87,0,38.57-27.65,67.58-69,4.11-14.89,9.12-30.83,14.94-47.28,6.23-17.62,12.82-34.2,19.42-49.16Z" />
      <path id="petal-15" class="path"
        d="M510.47,428.77c-13.61,0-40.23-9.42-73-25.85-11.82-14-25.06-28.36-39.36-42.66-8.81-8.81-17.76-17.33-26.64-25.36,13.66,5.85,28.13,11.49,43.05,16.77,18.46,6.53,36.58,12.15,53.86,16.72,35.64,27,55.57,49.49,50.79,57.3C517.88,427.74,515,428.77,510.47,428.77Z" />
      <path
        d="M374,336.52c12.85,5.44,26.4,10.68,40.36,15.62,18.44,6.52,36.54,12.14,53.8,16.71,17.44,13.22,31.38,25.52,40.33,35.58s12.47,17.39,10.26,21c-1.15,1.89-3.93,2.84-8.24,2.84-13.52,0-40-9.39-72.72-25.75-11.82-14-25.05-28.34-39.33-42.62-8.09-8.09-16.3-15.94-24.46-23.38m-5.13-3.28c9.41,8.42,19.11,17.6,28.88,27.37,14.65,14.65,28,29.14,39.41,42.71,32.6,16.33,59.58,25.95,73.35,25.95,4.6,0,7.72-1.07,9.09-3.31,5.17-8.46-15.81-31.38-51-58-16.74-4.42-35-10-53.92-16.73-16.32-5.78-31.75-11.85-45.82-18Z" />
      <path id="petal-16" class="path"
        d="M173.18,210.12l-5-1.79C138,197.66,108.94,189.45,84.13,184.6c-30.22-24-46.29-43.35-41.95-50.45,1.25-2,4.16-3.08,8.66-3.08,13.4,0,39.53,9.18,71.7,25.19,12,14.27,25.48,28.9,40.06,43.48C166.07,203.22,169.63,206.7,173.18,210.12Z" />
      <path
        d="M50.84,131.57c13.31,0,39.32,9.15,71.38,25.09,12,14.26,25.46,28.87,40,43.44,2.93,2.93,5.91,5.86,8.91,8.76l-2.81-1c-30.15-10.66-59.19-18.87-84-23.73C69.6,172.4,58,161.58,50.66,152.85s-10-15.16-8-18.44c1.15-1.88,3.92-2.84,8.23-2.84m0-1c-4.59,0-7.71,1.07-9.08,3.32-4.72,7.72,12.36,27.5,42.16,51.17,23.73,4.64,53,12.75,84.1,23.74,2.43.86,4.83,1.73,7.22,2.6q-6.11-5.84-12.29-12c-14.94-14.94-28.49-29.73-40.09-43.53-32-15.93-58.44-25.29-72-25.29Z" />
      <path id="petal-17" class="path"
        d="M294,202.29A77.24,77.24,0,0,0,283,201.5c-.9,0-1.8,0-2.69.06-6.79-18.6-15.45-39.06-25.07-59.21l-.74-1.54V140c0-20.73.82-40.7,2.45-59.35C261.19,32,270.24.5,280,.5c8.15,0,15.9,22,20.74,58.76C303.85,83,305.5,110.87,305.5,140c0,7.55-.11,15.18-.34,22.65C300.81,176.37,297,189.7,294,202.29Z" />
      <path
        d="M280,1c7.76,0,15.51,22.35,20.24,58.33C303.35,83,305,110.89,305,140c0,7.53-.11,15.12-.34,22.57-4.29,13.54-8,26.71-11.09,39.16A77.79,77.79,0,0,0,283,201c-.79,0-1.58,0-2.35.05-6.77-18.53-15.39-38.88-25-58.91l-.53-1.12-.16-.32V140c0-20.72.82-40.67,2.45-59.3C261.6,33,270.66,1,280,1m0-1c-10.42,0-19.4,33-23.55,80.61-1.57,18-2.45,38.16-2.45,59.39v.93c.27.54.53,1.09.79,1.64,10,21,18.54,41.27,25.17,59.51,1,0,2-.08,3-.08a75.41,75.41,0,0,1,11.32.85c3.06-12.49,6.86-26,11.34-40.11.22-7.4.34-15,.34-22.74,0-30.1-1.76-58-4.77-80.8C296.52,23.38,288.77,0,280,0Z" />
      <path id="petal-18" class="path"
        d="M280,559.5c-7.89,0-15.5-20.9-20.36-55.92-1.91-13.83-3.32-29.25-4.18-45.83,4.92-11.84,9.69-24.26,14.17-36.93a662.47,662.47,0,0,0,20.42-68.66,76,76,0,0,0,10.05-1.63c.87,2.52,1.79,5.11,2.74,7.71,1.76,19.31,2.66,40.09,2.66,61.76,0,20.14-.78,39.57-2.31,57.77C299,527.42,289.9,559.5,280,559.5Z" />
      <path
        d="M299.77,351.12c.82,2.36,1.69,4.79,2.57,7.23,1.77,19.28,2.66,40,2.66,61.65,0,20.12-.78,39.54-2.31,57.72-2,24.11-5.28,44.54-9.39,59.09C289.25,551.12,284.53,559,280,559c-7.51,0-15.12-21.26-19.86-55.49-1.91-13.79-3.32-29.16-4.18-45.68,4.92-11.81,9.68-24.21,14.14-36.84a666.79,666.79,0,0,0,20.36-68.37,77.12,77.12,0,0,0,9.31-1.5m.66-1.18a73.87,73.87,0,0,1-10.78,1.75,661.56,661.56,0,0,1-20.49,69c-4.59,13-9.37,25.38-14.21,37,.87,16.82,2.31,32.36,4.2,46C263.89,537.85,271.46,560,280,560c10.53,0,19.6-33.71,23.69-82.19,1.48-17.62,2.31-37.2,2.31-57.81,0-22.21-1-43.21-2.67-61.87q-1.51-4.17-2.9-8.19Z" />
      <path id="petal-19" class="path"
        d="M441.8,305.19c-3.24-1.2-6.49-2.37-9.64-3.49a650,650,0,0,0-73.73-21.58c.05-1.13.07-2.16.07-3.12,0-1.26,0-2.6-.12-4.08,14.69-4.94,30.52-11.09,47.05-18.28,4.83-.09,9.73-.14,14.57-.14,20.53,0,40.32.81,58.82,2.4,49,4.23,80.68,13.29,80.68,23.1,0,8.19-22.15,16-59.25,20.8C482.89,303.06,462.69,304.58,441.8,305.19Z" />
      <path
        d="M420,255c20.51,0,40.29.81,58.78,2.4,48,4.14,80.22,13.22,80.22,22.6,0,6.11-15.45,14.65-58.82,20.31-17.31,2.25-37.46,3.76-58.3,4.37-3.19-1.18-6.41-2.34-9.56-3.45A650.76,650.76,0,0,0,359,279.73c0-1,.05-1.88.05-2.73,0-1.16,0-2.39-.1-3.73,14.57-4.91,30.26-11,46.64-18.13,4.8-.09,9.66-.14,14.46-.14m0-1q-7.44,0-14.67.14c-16.95,7.37-33,13.58-47.47,18.42.08,1.47.14,2.95.14,4.44,0,1.18,0,2.35-.09,3.52A648.81,648.81,0,0,1,432,302.17q4.92,1.74,9.73,3.52c21.55-.63,41.48-2.16,58.59-4.39C536.4,296.59,560,288.81,560,280c0-10.45-33.23-19.47-81.14-23.59C461,254.86,441,254,420,254Z" />
      <path id="petal-20" class="path"
        d="M140,305.5c-20.33,0-39.94-.79-58.29-2.36C32.38,298.94.5,289.85.5,280c0-7.85,20.74-15.44,55.47-20.29,24.38-3.41,53.44-5.21,84-5.21h0c3.48,1.29,7,2.57,10.5,3.8,19.64,6.95,38.82,12.85,57,17.55V276c0,.32,0,.64,0,1a75.55,75.55,0,0,0,1.7,15.89c-9.2,3.43-18.81,7.3-28.57,11.5C167.49,305.12,153.82,305.5,140,305.5Z" />
      <path
        d="M139.92,255c3.48,1.29,7,2.55,10.42,3.77,19.52,6.9,38.58,12.78,56.67,17.46,0,.26,0,.51,0,.77a75.88,75.88,0,0,0,1.62,15.57c-9.06,3.39-18.51,7.2-28.11,11.32-13.1.74-26.73,1.11-40.51,1.11-20.32,0-39.91-.79-58.25-2.36-24-2-44.27-5.29-58.72-9.39-14.21-4-22-8.74-22-13.25,0-7.47,21.09-15.05,55-19.8,24.34-3.4,53.34-5.2,83.88-5.2m.08-1c-31.56,0-60.68,1.94-84.1,5.21C22,264,0,271.5,0,280c0,10.49,33.47,19.53,81.67,23.64C99.42,305.15,119.18,306,140,306c14.17,0,27.85-.39,40.75-1.12,10.05-4.32,19.78-8.23,29-11.67A75.25,75.25,0,0,1,208,277c0-.51,0-1,0-1.53-17.67-4.55-37.13-10.49-57.36-17.64q-5.35-1.89-10.58-3.83Z" />
      <path id="petal-21" class="path"
        d="M342.56,230.62a76.72,76.72,0,0,0-6.82-7.61c8.49-17.58,17.05-38,24.78-59.26l.78-.78c14.62-14.62,29.28-28.12,43.58-40.13,31.33-26.32,56.9-42,68.4-42A6.44,6.44,0,0,1,478,82.36c5.83,5.83-4.47,27.16-27.54,57.07A641.07,641.07,0,0,1,397.36,199l-2.64,2.62C375.67,211.17,358.13,220.91,342.56,230.62Z" />
      <path
        d="M473.28,81.3a5.93,5.93,0,0,1,4.34,1.42c5.55,5.55-5,27.16-27.59,56.4-14.44,18.72-32.78,39.31-53,59.56l-2.59,2.57c-18.88,9.42-36.28,19.08-51.74,28.71a78.36,78.36,0,0,0-6.33-7.06c8.43-17.49,16.93-37.82,24.6-58.87l.21-.21.49-.49c14.61-14.61,29.26-28.1,43.55-40.11C436.44,97,461.89,81.3,473.28,81.3m0-1c-11.8,0-37.8,16.17-68.73,42.16-13.82,11.61-28.63,25.19-43.61,40.16l-.85.86c-8,22.09-16.61,42.38-24.95,59.63a76.56,76.56,0,0,1,7.3,8.18c15.17-9.49,33-19.46,52.57-29.21l2.7-2.69a635.52,635.52,0,0,0,53.11-59.66c22.43-29.06,33.77-51.46,27.5-57.72a6.86,6.86,0,0,0-5-1.71Z" />
      <path id="petal-22" class="path"
        d="M87.39,479.2a6.41,6.41,0,0,1-4.69-1.56c-5.52-5.52,3.65-25.38,24.53-53.12a577,577,0,0,1,39.83-46.8c9.78-4.15,19.76-8.65,29.67-13.38,20.17-9.63,39.81-20.12,56.8-30.33a76.18,76.18,0,0,0,11,8c-1.79,3.82-3.62,7.83-5.42,11.93-11.92,14.15-25.3,28.67-39.76,43.13-14.28,14.28-28.61,27.5-42.6,39.31C125,463.18,99,479.2,87.39,479.2Z" />
      <path
        d="M233.48,334.62a76.44,76.44,0,0,0,10.43,7.55c-1.73,3.68-3.48,7.53-5.21,11.46-11.9,14.13-25.25,28.61-39.68,43-14.27,14.27-28.59,27.49-42.57,39.28-31.71,26.77-57.53,42.75-69.06,42.75a5.93,5.93,0,0,1-4.34-1.42c-5.24-5.24,4.17-25.34,24.58-52.46a577.84,577.84,0,0,1,39.72-46.68c9.76-4.14,19.72-8.63,29.59-13.34,20.07-9.58,39.6-20,56.54-30.18m.1-1.23c-16.64,10-36,20.46-57.07,30.5-10.14,4.84-20.1,9.32-29.74,13.42a572.56,572.56,0,0,0-39.94,46.91C86.41,451.35,76.37,472,82.34,478a6.9,6.9,0,0,0,5,1.71c11.93,0,38.34-16.51,69.7-43,13.55-11.43,28-24.72,42.63-39.34,14.83-14.83,28.29-29.5,39.84-43.22q2.82-6.41,5.64-12.39a75,75,0,0,1-11.62-8.38Z" />
      <path id="petal-23" class="path"
        d="M473.28,479.2c-9.07,0-27.55-10.14-50.71-27.83-10.78-8.23-22.25-17.82-34.09-28.49-3.94-9.21-8.18-18.58-12.6-27.85A652.22,652.22,0,0,0,339,327.63c1.58-1.75,3.11-3.61,4.56-5.55,7.76,3.85,16.17,7.75,25,11.58,9.58,8.59,19.27,17.78,28.8,27.3,14.31,14.31,27.56,28.67,39.38,42.68,32,38,48.21,67,41.23,74a6.44,6.44,0,0,1-4.69,1.56Z" />
      <path
        d="M343.71,322.71c7.65,3.79,15.91,7.62,24.58,11.38,9.55,8.56,19.21,17.72,28.72,27.23C411.3,375.61,424.54,390,436.35,404c15.56,18.44,27.67,35.14,35,48.3,7.22,12.94,9.44,21.82,6.25,25a5.93,5.93,0,0,1-4.34,1.42c-9,0-27.34-10.11-50.41-27.73-10.74-8.2-22.17-17.76-34-28.39-3.92-9.17-8.15-18.51-12.57-27.76a649.52,649.52,0,0,0-36.71-67.13c1.42-1.58,2.79-3.25,4.09-5m-.3-1.27a74.41,74.41,0,0,1-5,6.14,645.65,645.65,0,0,1,37.06,67.67c4.54,9.5,8.76,18.85,12.64,27.92,12,10.85,23.57,20.49,34.2,28.6,22.94,17.52,41.54,27.93,51,27.93a6.86,6.86,0,0,0,5-1.71c7.44-7.43-9.92-37.59-41.2-74.67-11.45-13.57-24.76-28.06-39.41-42.71-9.77-9.77-19.47-18.95-28.88-27.37-9.08-3.95-17.6-7.9-25.42-11.8Z" />
      <path id="petal-24" class="path"
        d="M223.52,230.52c-14.89-6.78-31-13.35-48-19.55-4.1-3.92-8.2-7.93-12.2-11.93-14.59-14.6-28.08-29.23-40.07-43.5C91.69,118,75.78,89.28,82.7,82.36a6.41,6.41,0,0,1,4.69-1.56c9.1,0,26.88,9.71,50.06,27.33,19.34,14.72,40.76,33.68,61.92,54.84,4.71,4.71,9.41,9.54,14,14.35,7.25,14.52,14.72,28.3,22.21,41A75.57,75.57,0,0,0,223.52,230.52Z" />
      <path
        d="M87.39,81.3c8.86,0,27,9.92,49.75,27.23,19.33,14.7,40.73,33.65,61.88,54.8,4.68,4.68,9.36,9.49,13.91,14.28,7.17,14.36,14.56,28,22,40.57a77,77,0,0,0-11.53,11.72c-14.77-6.71-30.78-13.22-47.59-19.37-4.06-3.88-8.14-7.87-12.12-11.85-14.58-14.58-28-29.2-40-43.47C92.74,118.47,76.43,89.33,83.05,82.72a5.93,5.93,0,0,1,4.34-1.42m0-1a6.9,6.9,0,0,0-5,1.71C75,89.39,92,119.16,122.86,155.86c11.6,13.8,25.15,28.59,40.09,43.53q6.18,6.17,12.29,12c17.49,6.39,33.84,13.08,48.44,19.74a75.34,75.34,0,0,1,12.52-12.72c-7.4-12.51-15-26.44-22.45-41.39q-6.78-7.16-14-14.41c-21.85-21.86-43.37-40.74-62-54.89C115.1,90.51,96.77,80.3,87.39,80.3Z" />
      <path id="petal-25" class="path"
        d="M335,222.28a74.94,74.94,0,0,0-40.05-19.84c3.09-12.56,6.86-25.87,11.19-39.55,2.45-7.71,5.09-15.58,7.85-23.38a651.62,651.62,0,0,1,29-69.76c16.54-33.51,31.48-53.51,40-53.51a4.48,4.48,0,0,1,1.56.26c6.88,2.43,7.56,22.22,1.83,53-4.67,25-13.3,56-24.3,87.07q-1.21,3.42-2.44,6.79C351.93,184.4,343.42,204.77,335,222.28Z" />
      <path
        d="M383,16.74a4.07,4.07,0,0,1,1.4.23c3.2,1.13,5.05,6.49,5.34,15.5s-1,21.82-3.84,36.89c-4.67,25-13.29,55.92-24.28,87-.8,2.26-1.62,4.54-2.44,6.79-7.59,20.82-16,41-24.32,58.3A75.38,75.38,0,0,0,295.55,202c3.07-12.4,6.79-25.51,11.06-39,2.44-7.71,5.08-15.57,7.84-23.36a652.79,652.79,0,0,1,29-69.71C359.65,37.14,374.8,16.74,383,16.74m0-1c-9,0-24.22,21-40.42,53.79a651.35,651.35,0,0,0-29,69.81c-2.81,7.94-5.43,15.76-7.85,23.4-4.48,14.12-8.28,27.62-11.34,40.11a74.83,74.83,0,0,1,40.82,20.26c8.34-17.25,16.9-37.54,24.95-59.63.82-2.25,1.63-4.51,2.44-6.8,11.47-32.43,19.8-62.88,24.32-87.14,5.65-30.26,5.37-50.86-2.15-53.51a5,5,0,0,0-1.73-.29Z" />
      <path id="petal-26" class="path"
        d="M199.7,543.76a4.54,4.54,0,0,1-1.57-.26c-9.86-3.49-6.83-40.77,7.55-92.77,4.22-15.28,9.25-31.18,14.93-47.25,6.08-17.2,12.61-33.72,19.4-49.11,1.8-4.08,3.62-8.08,5.41-11.9a75.36,75.36,0,0,0,37.58,10c1.91,0,3.88-.08,6-.25a667.49,667.49,0,0,1-20.32,68.24c-4.49,12.68-9.26,25.13-14.2,37-12.67,30.43-25.8,55.63-37,71-7.32,10-13.48,15.34-17.8,15.34Z" />
      <path
        d="M245.64,343.18A76,76,0,0,0,283,353c1.72,0,3.49-.07,5.36-.2a665,665,0,0,1-20.14,67.52C263.74,433,259,445.43,254,457.27c-12.66,30.39-25.77,55.55-36.93,70.85-9.13,12.52-14.5,15.14-17.4,15.14a4,4,0,0,1-1.4-.23c-9.45-3.34-6.22-41.24,7.86-92.17,4.22-15.27,9.24-31.16,14.92-47.21,6.08-17.19,12.6-33.7,19.39-49.08,1.72-3.91,3.46-7.73,5.17-11.39m-.44-1.41q-2.82,6-5.64,12.39c-6.6,15-13.19,31.54-19.42,49.16-5.82,16.45-10.83,32.39-14.94,47.28C191.07,501.67,187.48,540.27,198,544a5,5,0,0,0,1.73.29c4.64,0,11-5.6,18.21-15.55,11-15.12,24.23-40.28,37-71.05,4.84-11.62,9.62-24,14.21-37a661.56,661.56,0,0,0,20.49-69c-2.19.19-4.41.31-6.65.31a74.65,74.65,0,0,1-37.8-10.23Z" />
      <path id="petal-27" class="path"
        d="M536.23,378.92c-15.55,0-39.54-4.07-67.53-11.47-17.29-4.57-35.42-10.19-53.88-16.73-15.93-5.63-31.33-11.67-45.79-17.94-8.78-3.81-17.14-7.69-24.87-11.52a75,75,0,0,0,14.22-40.12,648.71,648.71,0,0,1,73.44,21.5c3.18,1.13,6.46,2.31,9.73,3.52,32.52,12,62.05,25.46,83.14,37.89C546,356.6,557,367.22,554.84,373.2c-1.33,3.74-7.76,5.72-18.61,5.72Z" />
      <path
        d="M358.85,281.75a653.48,653.48,0,0,1,72.81,21.36c3.2,1.14,6.47,2.32,9.71,3.52,32.5,12,62,25.43,83.06,37.85s32,22.82,29.94,28.55c-1.23,3.48-7.67,5.39-18.14,5.39-15.51,0-39.45-4.07-67.41-11.45-17.26-4.56-35.38-10.19-53.84-16.72-15.92-5.63-31.31-11.66-45.75-17.93-8.57-3.72-16.75-7.5-24.32-11.25a75.55,75.55,0,0,0,13.94-39.32m-.94-1.23a74.66,74.66,0,0,1-14.5,40.92c7.82,3.9,16.34,7.85,25.42,11.8,14.07,6.11,29.5,12.18,45.82,18,18.92,6.69,37.18,12.31,53.92,16.73,28.18,7.45,52.08,11.49,67.66,11.49,10.82,0,17.63-1.95,19.08-6.05,2.31-6.55-9.4-17.39-30.37-29.75-20.43-12.05-49.65-25.54-83.22-37.93q-4.82-1.77-9.73-3.52a648.81,648.81,0,0,0-74.08-21.65Z" />
      <path id="petal-28" class="path"
        d="M207.55,274.82c-18.09-4.68-37.17-10.55-56.71-17.46-3.51-1.24-7.06-2.53-10.56-3.83C110,242.32,82,229.68,61.44,218c-23.6-13.46-35.85-24.82-33.61-31.15,1.32-3.74,7.76-5.72,18.6-5.72,9.48,0,22.41,1.55,37.39,4.47,24.79,4.85,53.85,13,84,23.73,2.43.85,4.83,1.72,7.22,2.59,16.9,6.17,33,12.72,47.83,19.46A74.81,74.81,0,0,0,207.55,274.82Z" />
      <path
        d="M46.43,181.58c9.45,0,22.35,1.54,37.29,4.46,24.77,4.84,53.8,13,84,23.71,2.35.83,4.78,1.7,7.22,2.59,16.67,6.09,32.55,12.54,47.22,19.19a75.31,75.31,0,0,0-15.05,42.65c-17.9-4.65-36.76-10.47-56.06-17.29-3.49-1.24-7-2.52-10.56-3.83-30.25-11.2-58.22-23.82-78.76-35.54C38.66,204.38,26.18,193,28.3,187c1.23-3.48,7.67-5.39,18.13-5.39m0-1c-10.81,0-17.62,1.95-19.07,6-2.44,6.9,10.71,18.56,33.83,31.76,20,11.42,47.55,24,78.91,35.61q5.22,1.94,10.58,3.83c20.23,7.15,39.69,13.09,57.36,17.64a74.55,74.55,0,0,1,15.64-44.33c-14.6-6.66-31-13.35-48.44-19.74-2.39-.87-4.79-1.74-7.22-2.6-31.09-11-60.37-19.1-84.1-23.74-15-2.94-27.85-4.48-37.49-4.48Z" />
      <path id="petal-29" class="path"
        d="M358.32,271.88a75,75,0,0,0-15.15-40.46c15.54-9.69,33.05-19.41,52.07-28.9,3.93-2,7.89-3.89,11.76-5.74,28.17-13.45,55.64-24.49,79.42-31.92,19.46-6.09,35.12-9.31,45.3-9.31,6.76,0,10.85,1.4,12.16,4.14,3.65,7.66-15,25.64-48.58,46.91A654,654,0,0,1,429,242.8c-7.92,3.79-15.94,7.45-23.84,10.88C388.68,260.84,372.93,267,358.32,271.88Z" />
      <path
        d="M531.72,156.05c6.45,0,10.5,1.34,11.7,3.85,1.69,3.53-2,9.89-10.3,17.91s-21.65,18-38.09,28.36a649.78,649.78,0,0,1-66.27,36.18c-7.91,3.78-15.93,7.44-23.83,10.87-16.21,7-31.73,13.1-46.16,18a75.48,75.48,0,0,0-14.87-39.64c15.41-9.59,32.75-19.21,51.56-28.59,3.93-2,7.89-3.89,11.76-5.74,28.15-13.44,55.59-24.47,79.34-31.9,19.42-6.07,35-9.28,45.16-9.28m0-1c-10.32,0-26.16,3.3-45.45,9.33-22.81,7.13-50.43,18.08-79.49,32q-6,2.85-11.77,5.75c-19.56,9.75-37.4,19.72-52.57,29.21a74.59,74.59,0,0,1,15.42,41.27c14.45-4.84,30.52-11.05,47.47-18.42,7.79-3.39,15.77-7,23.86-10.88A653.16,653.16,0,0,0,495.56,207c33-20.88,52.73-39.25,48.77-47.55-1.44-3-5.83-4.42-12.61-4.42Z" />
      <path id="petal-30" class="path"
        d="M51.57,404.67c-6.75,0-10.84-1.39-12.15-4.14-3.93-8.23,17-27.67,54.73-50.73a674.55,674.55,0,0,1,60.17-32.38c8.87-4.24,17.83-8.3,26.62-12.08,9.73-4.18,19.31-8,28.47-11.46a75,75,0,0,0,23.33,39.44c-16.9,10.14-36.4,20.55-56.45,30.12-9.92,4.74-19.92,9.25-29.72,13.41-29.72,12.6-57,21.72-76.91,25.66a96.31,96.31,0,0,1-18.08,2.16Z" />
      <path
        d="M209.06,294.54a75.33,75.33,0,0,0,22.84,38.69c-16.75,10-36,20.31-55.82,29.76-9.91,4.73-19.91,9.24-29.7,13.4C116.68,389,89.4,398.08,69.56,402a95.27,95.27,0,0,1-18,2.15c-6.46,0-10.51-1.33-11.71-3.85-3.75-7.86,17.66-27.53,54.55-50.09a670.65,670.65,0,0,1,60.12-32.36c8.85-4.23,17.8-8.29,26.6-12.07,9.53-4.1,18.92-7.88,27.92-11.26m.72-1.33c-9.25,3.44-19,7.35-29,11.67-8.68,3.73-17.59,7.76-26.64,12.09a668.66,668.66,0,0,0-60.22,32.4C57.21,371.82,34.77,392,39,400.75c1.43,3,5.83,4.42,12.61,4.42A97.07,97.07,0,0,0,69.76,403c19.54-3.89,46.7-12.85,77-25.7,9.64-4.1,19.6-8.58,29.74-13.42,21.05-10,40.43-20.47,57.07-30.5a74.85,74.85,0,0,1-23.8-40.18Z" />
      <path id="petal-31" class="path"
        d="M410,532.79c-11.24,0-36-31.18-61.61-77.58-6.63-12-13.15-24.71-19.39-37.77-9.66-20.24-18.36-40.81-25.15-59.48-.94-2.59-1.86-5.16-2.72-7.66a75.15,75.15,0,0,0,37.22-21.9A649.84,649.84,0,0,1,375,395.46c4.43,9.29,8.68,18.68,12.63,27.91,13.24,31,22.69,59.26,26.62,79.65,3.22,16.7,2.46,27.11-2.16,29.32a4.91,4.91,0,0,1-2.12.45Z" />
      <path
        d="M338.22,329.21a652.2,652.2,0,0,1,36.31,66.47c4.43,9.29,8.68,18.68,12.62,27.89,13.22,30.93,22.67,59.19,26.59,79.55,3.18,16.45,2.5,26.67-1.89,28.77a4.34,4.34,0,0,1-1.9.4c-11.06,0-35.64-31.07-61.17-77.32-6.63-12-13.14-24.7-19.37-37.75-9.66-20.22-18.35-40.77-25.14-59.43-.88-2.41-1.73-4.81-2.54-7.14a75.62,75.62,0,0,0,36.49-21.44m.15-1.63a74.89,74.89,0,0,1-37.94,22.36q1.38,4,2.9,8.19c6.64,18.24,15.14,38.51,25.17,59.52,6.38,13.37,12.92,26.06,19.4,37.8,25.53,46.25,50.32,77.84,62.05,77.84a5.34,5.34,0,0,0,2.34-.5c5.06-2.42,5.62-13.32,2.44-29.86-3.86-20-13.19-48.24-26.66-79.76-3.88-9.07-8.1-18.42-12.64-27.92a645.65,645.65,0,0,0-37.06-67.67Z" />
      <path id="petal-32" class="path"
        d="M236.34,217.67c-7.47-12.64-14.91-26.39-22.14-40.86-2-4-4-8.06-5.88-12.05-12.53-26.23-23-52.09-30.45-74.78-11.52-35.37-14-58.58-6.64-62.1a4.88,4.88,0,0,1,2.12-.45c6.81,0,18.56,11.21,33.09,31.57,15.1,21.15,31.83,50.33,47.11,82.14l.79,1.65c9.55,20,18.16,40.32,24.92,58.82A74.74,74.74,0,0,0,236.34,217.67Z" />
      <path
        d="M173.35,27.93c6.55,0,18.46,11.43,32.68,31.36,15.08,21.13,31.8,50.28,47.07,82.07l.26.53.53,1.11c9.43,19.76,17.95,39.83,24.67,58.14a75.26,75.26,0,0,0-42.08,15.78c-7.36-12.49-14.7-26.06-21.83-40.34-2-4-4-8.06-5.88-12-12.52-26.21-23-52-30.42-74.72-11.27-34.58-13.92-58.14-6.91-61.49a4.38,4.38,0,0,1,1.91-.4m0-1a5.34,5.34,0,0,0-2.34.5c-7.92,3.79-4.83,28.28,6.38,62.7,7.13,21.87,17.53,47.74,30.48,74.84q2.92,6.14,5.88,12.06c7.47,14.95,15.05,28.88,22.45,41.39A74.56,74.56,0,0,1,280,202.08c-6.63-18.24-15.14-38.5-25.17-59.51-.26-.55-.52-1.1-.79-1.64-15.85-33-32.59-61.82-47.15-82.22-14.19-19.88-26.31-31.78-33.5-31.78Z" />
      <path id="center" class="path"
        d="M283,351.5A74.5,74.5,0,0,1,208.5,277c0-.31,0-.62,0-.93l0-.59a73.77,73.77,0,0,1,15.53-44,74.77,74.77,0,0,1,12.44-12.64A73.81,73.81,0,0,1,280,202.58c1,0,2-.08,3-.08a74.34,74.34,0,0,1,51.79,21,75.25,75.25,0,0,1,7.25,8.12,74,74,0,0,1,15.32,41c.09,1.62.14,3.06.14,4.41,0,1.06,0,2.21-.09,3.5A74,74,0,0,1,343,321.14a74.94,74.94,0,0,1-5,6.1,74.18,74.18,0,0,1-48.4,23.95C287.25,351.4,285.09,351.5,283,351.5Z" />
      <path id="petal-33" class="path"
        d="M283,203a74.5,74.5,0,0,1,11.17.84,73.43,73.43,0,0,1,40.27,20,74.48,74.48,0,0,1,7.21,8.07,73.55,73.55,0,0,1,15.21,40.72c.09,1.61.14,3.05.14,4.38,0,1.06,0,2.2-.09,3.48a73.5,73.5,0,0,1-14.31,40.37,75.61,75.61,0,0,1-5,6.06,73.77,73.77,0,0,1-48.07,23.78c-2.34.21-4.49.31-6.56.31a74,74,0,0,1-37.3-10.09,74.94,74.94,0,0,1-11.46-8.27A73.48,73.48,0,0,1,210.75,293,74.52,74.52,0,0,1,209,277c0-.3,0-.6,0-.9s0-.41,0-.61a73.33,73.33,0,0,1,15.43-43.74,74.45,74.45,0,0,1,12.35-12.55A73.29,73.29,0,0,1,280,203.08c1,0,2-.08,3-.08m0-1c-1,0-2,0-3,.08a74.56,74.56,0,0,0-43.76,16.34,75.34,75.34,0,0,0-12.52,12.72A74.55,74.55,0,0,0,208,275.47c0,.51,0,1,0,1.53a75,75,0,0,0,75,75c2.24,0,4.46-.12,6.65-.31a73.87,73.87,0,0,0,10.78-1.75,75,75,0,0,0,57.48-69.42c0-1.17.09-2.34.09-3.52,0-1.49-.06-3-.14-4.44a74.59,74.59,0,0,0-15.42-41.27,76.56,76.56,0,0,0-7.3-8.18A74.75,74.75,0,0,0,283,202Z" />
    </g>
</svg>
`;

export default Flower;
