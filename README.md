# Web Development Project 4 - Doggie Galore

Submitted by: Luis Pina

This web app: Here is an app where you can shuffle through many dogs and see a few attributes about them, if you do not want to see say herdining dogs, you can ban that attribute and it would not show you those

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - [x] To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [x] Multiple types of attributes can be added to the ban list
- [ ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:
- [x] **Since some API calls would result in images with no infomraiton I added a check to ensure that only imgaes with traits cans be shown**
* [ ] List anything else that you added to improve the site's functionality!
## Video Walkthrough

Here's a walkthrough of implemented user stories:

![proj4.gif](https://github.com/ldpina/DoggieGaloreV1/blob/main/proj4.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGIF!  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Took me a while to get a banned list going but it finally worked, also having to deal with the api calls that resulted with no additional information about the dogs.

## License

    Copyright 2024 Luis Pina

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
