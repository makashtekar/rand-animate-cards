Random animate cards with play & pause


===== INSTALLATION =====

npm install
bower install

===== RUN SERVER =====
//app/index.js

node index.js


===== DATABASE CONFIURATION =====
 // index.js
 mongoose.connect('mongodb://localhost:27017/animated_cards');     <-- Change this connection string to according to your local/live

 animated_cards is database name

 Create 2 collections
    - countries
      - code (string)
      - name (string)
    - alphabets
      - letters (array)
