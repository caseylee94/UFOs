# UFOs

## Project Overview

The purpose of this project was to create a dynamic website using Javascript and Bootstrap to allow visitors to filter through UFO sightings based on certain criteria. The client (Dana), first wanted a webpage that would allow the visitors to filter by date of UFO sightings. Once created, Dana asked for the site to be further developed and to provide a more in-depth analysis of UFO sightings by allowing users to filter for the city, state, country, and shape at the same time. This will greatly increase the user experience by enabling them to discover specific instances that they are curious about. Since the webpage was already built, the html code for the webpage and the javascript file only had to be refactored.

## Resources

* Software: Javascript, HTML, Bootstrap, CSS
* Platform: Visual Studio Code

## Results

Dana wanted her webpage to appear aesthetically pleasing with a background image of the view of Earth from space and an intro paragraph discussing the conversation around the existence of UFOs. A snapshot of the webpage is shown below:

![background.png](/resources/background.png)

The list of filters is on the left hand side of the page and the sightings are on the right side. The webpage is set up so that it will automatically update the sightings data once the filters are typed in, without the user having to do anything else. The initial formatting of the data when the webpage is loaded without any filters displays all of the data and in the filter boxes are placeholders, basically examples of what could be typed into the filter. A screen capture of this is shown below:

![filters1.png](/resources/filters1.png)

The user can decide to use one or all of the filters. The webpage will automatically filter along as the user types in different inputs. The "filter table" button was taken out of the original webpage to allow for this quicker filtering; it will work with one or all of the filters.

![one_filter.png](/resources/one_filter.png)

The above example shows one filter (date) on the data set. Below shows a more specific search of three filters:

![correct_filter.png](/resources/correct_filter.png)

Notice from these images the data is all formatted the same way. This is important, and the filters will only work for inputs in that specific form. This is a drawback in this webpage and could potentially be confusing for the user and cause errors. The image below shows an example:

![caps_on.png](/resources/caps_on.png)

It is case sensitive so searching for "CA" does not work, it would have to be formatted lower case like "ca".

## Summary
