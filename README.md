# easy-react-animation
 
 <img src="https://img.shields.io/badge/Easy_React_Animation-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
 
 ![easy-react-animation-gif](https://user-images.githubusercontent.com/105171818/182521943-24293a27-0696-49b9-8f80-66dff3ada5ca.gif)

 
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
`DEFAULT VALUE = MEDIUM`

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
`MouseResponse`
`Enter`
`Filling`
`Flipping`
`Karaoke`