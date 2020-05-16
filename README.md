# [Simple Calendar] (https://katgrace0808.github.io/Simple-Calendar/)

Simple Calendar is a basic day planner to enter daily events.

## Description

The application opens to its only page, which is a daily calendar to plan events for the workday.   The workday in this 
planner is from 8am to 5pm.  Each hour provides a text box to enter the event, and a save button.  Once a user enters 
the event information, they click the save button and the event text is saved in the local storage.  The user can 
leave the page and return to find their events are still listed. 

The heading of the page includes a dynamic day, date, and time feature.  This feature is able to detect the user's time
table and display it.  

Another added feature on the calendar are color changes based on the time of day.  If the hour is in the past, the event 
box will be presented as gray in color.  If it is the present hour, it is a red color.  Lastly, if the hour is in the 
future, the color is green.  This gives the user a easy visual to tell what hour or hours they should focus their attention.

## Development of the Application

This application was easy in some respects, and difficult in others.  The provided html and css documents with prefilled 
elements and data, did allow me to focus more on the tasks of building out the requirements instead of needing to also
provide design.  I found using an array and a for loop easier as well.  The difficulties were with figuring out how to
get the local storage to work for each hour and event.  These items needed to sync up in order for the application to 
be useful to the end user.

My end result was helped by the aid of some classmates.  We bounced off ideas and build that was working and not working
with each other, and that alone helped me get over some of the hurdles. Collaboration is a great tool to use.

![Screenshot of deployed site](https://github.com/katgrace0808/Simple-Calendar/blob/master/Assets/SimpleCalendar.PNG)
