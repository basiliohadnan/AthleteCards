# AthleteCards!

Angular based app aimed to show [Strava](http://strava.com/)'s Athlete Cards with overall view of profiles and their activities stats.

- [Figma project](https://www.figma.com/file/f24r1rMYrjdbk117uZGgvP/Untitled?node-id=0%3A1)

- [Color references](https://coolors.co/8a716a-c2b8b2-197bbd-125e8a-204b57)

- Style structure used: [SCSS](https://sass-lang.com/)

- Jasmine/Karma unit tests introduction | [references](https://angular.io/guide/testing)

---

**How to run it**

 1. Clone the project
 2. Install [nodeJS](https://nodejs.org/en/download/)
 3. Install [angularCLI](https://angular.io/cli)
 4. Open your terminal 
 5. Navigate to the folder where you have cloned the project
 6. Run the command on your terminal: `ng s -o`
 7. Access your profile page on Strava (for example: https://www.strava.com/athletes/28361582) *or create it, if you don't have it already.*
 8. Copy the id shown at the end of the URL above and save it
 9. Access the [API settings' page](https://www.strava.com/settings/api) after logged in

 ![AccessTokenPage](https://i.ibb.co/7KJ2QWt/accesstoken.png)

 10. Click "Show", as indicated and copy the Access Token displayed
 11.	Navigate to the AthleteCards' tab
 12.	Paste the info as asked

![ID/Token inputs](https://i.ibb.co/g40qtJB/image.png)

 14. After pasting the info, click the Right Arrow.
 15. Verify the information brought to you (:
 
![AthleteStats Page](https://i.ibb.co/68gT2j8/image.png)
