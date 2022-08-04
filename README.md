# easy-react-animation
 
 <img src="https://img.shields.io/badge/easy_react_animation-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
 

 <img src = 'https://user-images.githubusercontent.com/105171818/182742256-fb5279c4-7222-4438-a56c-8b3bf8ad2f62.gif' alt = 'easy react animation gif' align='center' width=" 300px"/>

 In the project directory, you can run:

### `yarn add easy-react-animation`

or

### `npm i easy-react-animation`


# Mouse Response

## You can import Mouse Animation animation directly from the main package

```js
import { MouseResponse } from 'easy-react-animation'
```

## Usage 

```js
<MouseResponse depth={low || medium || high}>
 <div>
    <h2>Your amazing component here</h2>
 </div>
</MouseResponse>
```

## Props

### Depth
[![OPTIONAL](https://img.shields.io/badge/optional%20-%23323330.svg?&style=for-the-badge&logo=perfil&logoColor=black&color=gray)](https://github.com/iuricode/readme-template/tree/main/profile)

You can easily set the depth intensity by setting the 'depth' prop at the Mouse Response compononent <br><br>
`DEFAULT VALUE = LOW`

# Text Animation

## You can also import each Text Animation directly from the main package

```js
import { Flipping } from 'easy-react-animation'

```

## Usage 

```js
    <Flipping text="Flipping" className="yourClassName"  style={yourInlineStyle} color="yourColor" accessibilityFriendly=true />
```

## Props

### Text
[![REQUIRED](https://img.shields.io/badge/required%20-%23323330.svg?&style=for-the-badge&logo=perfil&logoColor=black&color=red)](https://github.com/iuricode/readme-template/tree/main/profile)

To set your text

### className
[![OPTIONAL](https://img.shields.io/badge/optional%20-%23323330.svg?&style=for-the-badge&logo=perfil&logoColor=black&color=gray)](https://github.com/iuricode/readme-template/tree/main/profile)

To apply your CSS style

### style
[![OPTIONAL](https://img.shields.io/badge/optional%20-%23323330.svg?&style=for-the-badge&logo=perfil&logoColor=black&color=gray)](https://github.com/iuricode/readme-template/tree/main/profile)

To apply your inline style

### color
[![OPTIONAL](https://img.shields.io/badge/optional%20-%23323330.svg?&style=for-the-badge&logo=perfil&logoColor=black&color=gray)](https://github.com/iuricode/readme-template/tree/main/profile)

To apply your text color (RGB or hex)

### accessibilityFriendly
[![OPTIONAL](https://img.shields.io/badge/optional%20-%23323330.svg?&style=for-the-badge&logo=perfil&logoColor=black&color=gray)](https://github.com/iuricode/readme-template/tree/main/profile)

To make it readable to screen readers




## Animations

Below is a list of all available animations <br><br>
`MouseResponse`<br>
`Enter`<br>
`Fading`<br>
`Filling`<br>
`Flipping`<br>
`Folding`<br>
`Karaoke`<br>
`Rolling`<br>
`Scaling`<br>
`Spinning`<br>

