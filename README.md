 [GROOVY TRAIN](https://media.giphy.com/media/QmMegeZeo3M9G/giphy.gif)
 [ToDo:Eat](https://todoeat.netlify.app/)

### Overview

_**ToDO: EAT** ToDo:Eat, is a Recipe book that mimics the usability of several major apps that I love and admire. 
Users are going to be able to page between recipes and like them and if they enjoyed the recipe. Additionally the 
applicatation will allow users to see how often the the recipe has been liked. 

### Wireframes

[Mobile]('src/wire/Screen Shot 2020-04-26 at 6.23.45 PM.png')
[Ipad]('src/wire/Screen Shot 2020-04-26 at 6.23.54 PM.png')
[Desktop]('src/wire/Screen Shot 2020-04-26 at 6.24.01 PM.png')


<br>

### MVP

**ToDo:Eat** application will allow users to navigate via the Edamam Api by selecting a 
catagory and flippign through the recipe book. Each Catagory should contain 25 recipe's tht the user can like. The recipe will include, colorie count, image, instructions, and list of items to obtain. 5 Catagories to select from including vegiterian, it must be nice.

<br>

#### Goals

- _Pull in 25 Recipies with Api on Catergory_
- _Make 6 components_
      _Navigation_
      _Title and Image_
      _Like Bar, with updating count state_
      _Ingredients_
      _Instructions_
      _Each Catagory_
- _Have a Beutiful, user friendly application_
- _Have my like heart work when clicked on_


<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Help me navigate within the application_  |
|   React Links    | _Navigate between linkes_                  |
|   Axios          | _imort Data_                               |
|   Jest           | _Heart, Arrow, Logo_                       |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Edamam |      yes      | _api.edamam.com_ | _search?q=chicken_ |

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ components/
      |__ Nav 
        |_Logo
        |_App name
        |_Link
        |_ Nav.css
      |__ info
        |_Title 
        |_Img
        |_Info.css
      |__ Bar
        |_ Heart
        |_ Calories
        |_ Likes
        |_ Bar.css
      |__ Ingredients
        |_Title
        |_Ingredents from API
        |_Ingredients.css
      |__ Prep
        |_ Prep feed from API
        |_ Prep.css
|__ App.Js
      
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|   Navigation | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|    Title     | functional |   n   |   y   | _Will contain information for the title and img of the product_       |
|     Bar      | functional |   y   |   y   | _This will include calories and update state_      |
| Ingredients  | functional |   n   |   y   | _Will pull all valuable ingredient info._                 |
| Preperation  | functional |   n   |   y   | _Prep instructions._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Nav Bar         |    H     |     3 hrs      |     4 hrs     |    4 hrs    |
| Title/Img           |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| Bar                 |    H     |     6 hrs      |     3 hrs     |    3 hrs    |
| Bar functionality   |    H     |     3 hrs      |     6 hrs     |    6 hrs    |
| Ingredients         |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Prep                |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Footer              |    H     |     3 hrs      |     1 hrs     |    1 hrs    |
| WireFrame           |    H     |     4 hrs      |     5 hrs     |    5 hrs    |
| Design              |    H     |     3 hrs      |     4 hrs     |    4 hrs    |
| Css Pagination      |    M     |     4 hrs      |     2 hrs     |    2 hrs    |
| Debugging           |    M     |     7 hrs      |     9 hrs     |    9 hrs    |

| TOTAL               |          |     40 hrs      |     40 hrs     |    40 hrs |

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP

- _Add Search functionaity._
- _Add comment functionality._
- _Add Share functionality._
- _Ingredient input Functionality._

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
