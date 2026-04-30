מערכת לניהול טיול שנתי
# תיאור הפרויקט
הפרויקט הוא מערכת Web מלאה המבוססת על ארכיטקטורת Client-Server:

- צד לקוח: React
- צד שרת: ASP.NET Core Web API
 בסיס נתונים (SQL Server)
המערכת מאפשרת עבודה מול API, ניהול נתונים ותקשורת בין הלקוח לשרת.


# ארכיטקטורת הפרויקט

הפרויקט מחולק לשלוש שכבות עיקריות:
 Client (React)
- ממשק משתמש
- שליחת בקשות לשרת
- הצגת נתונים

 API (ASP.NET Core)
- קבלת בקשות מהלקוח
- ניהול endpoints (Controllers)
- חיבור לשכבת הלוגיקה

 SQL Database
- שמירת נתונים
- טבלאות ישויות המערכת
- גישה דרך Entity Framework / SQL Queries

# טכנולוגיות בשימוש

 צד שרת:
- ASP.NET Core Web API
- C#
- Entity Framework Core 
- SignalR 

צד לקוח:
- React
- JavaScript 
- Axios / Fetch
- SignalR Client
- Leaflet

# התקנות והפעלת הפרויקט

דרישות מקדימות
יש לוודא התקנה של:

- .NET SDK (גרסה 6 ומעלה)
- Node.js (גרסה 16 ומעלה)
- npm
- Visual Studio / VS Cod

 התקנת צד לקוח (React)

יש להיכנס לתיקיית הלקוח ולהריץ:

npm install

לאחר מכן:

npm start
הרצת צד שרת (.NET)
1. פתיחת הפרויקט
יש לפתוח את קובץ ה־Solution ב־Visual Studio.
2. בחירת Startup Project
יש להגדיר את פרויקט ה־API כפרויקט הראשי:
קליק ימני על פרויקט ה־API
לבחור: Set as Startup Project
3. הרצת השרת

ניתן להריץ דרך Visual Studio או דרך פקודה:

dotnet restore
dotnet run
חיבור בין צד לקוח לשרת

הלקוח (React) מתקשר עם ה־API באמצעות HTTP Requests (GET/POST וכו') לקבלת ושליחת נתונים.

מבנה הפרויקט:
צילומי מסך

<img width="1224" height="610" alt="image" src="https://github.com/user-attachments/assets/2b4b7475-5d6b-43b8-98a1-2e229525f013" />
<img width="1239" height="589" alt="image" src="https://github.com/user-attachments/assets/1abe7a9a-9ce8-4fc5-8aa8-4af8fb57881b" />
<img width="1345" height="587" alt="image" src="https://github.com/user-attachments/assets/d44da737-6796-4da7-93b5-b86bc027b559" />
<img width="1323" height="566" alt="image" src="https://github.com/user-attachments/assets/b866cc52-514a-467f-9cca-7eb349525667" />
<img width="1360" height="492" alt="image" src="https://github.com/user-attachments/assets/7b635484-6070-42fb-b806-b7e62c480d56" />






הנחות / מגבלות בפרויקט
השרת והלקוח רצים מקומית (localhost)
הגדרת Startup Project נדרשת ידנית ב־Visual Studio
התקנות NuGet בצד השרת מתבצעות אוטומטית באמצעות restore
הפעלה מהירה
Client:
npm install
npm start
Server:
dotnet restore
dotnet run
