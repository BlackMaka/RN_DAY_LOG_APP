# RN_DAY_LOG_APP

## Setting

<br/>

### setting.json

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### .eslint.js

<br/>

컴포넌트 및 html 태그 오토 클로징 <br/>
prettier와 eslint 충돌 제거

```js
module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
```

### build.gradle
<br/>

/android/app/build.gradle 
<br/> 하단에 작성

```js
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] 
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```



### .eslint.js

<br/>

공통 설치

```bash
npm install @react-navigation/native
npm install react-native-screens
npm install react-native-safe-area-context
```

네이티브 스택 네비게이터

```bash
npm install @react-navigation/native-stack
```

네이티브 하단 탭 네비게이터

```bash
npm i @react-navigation/bottom-tabs
```

네이티브 아이콘

```bash
npm i react-native-vector-icons
```
