# RN_DAY_LOG_APP

## 환경설정
---
### 1. Node.js 설치 <br/>
[Node.js](https://nodejs.org/ko/)

### 2. chocolaty 설치
```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
버전확인
```bash
choch -v
```

jdk8 설치
```bash
choco install -y openjdk8
```


### 3. 안드로이드 스튜디오 설치

|시스템 변수 | 값 |
|---|---|
|ANDROID_HOME	| C:\Users\[사용자이름]\AppData\Local\Android\Sdk|


---
---
<br>

# Setting

<br/>

### settings.json
(eslint 문법에 맞게 오토 세이브기능 설정)
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
<br/>

### .eslint.js

<br/>

컴포넌트 및 html 태그 셀프 클로징 <br/>
elint 문제 중.. 라인 끝 에러표시 제거 <br/>
prettier와 eslint 충돌 제거 (dangle) 더블콤마 <br/>


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
    'comma-dangle': [
      0,
      {
        arrays: 'always',
        objects: 'never',
        imports: 'always',
        exports: 'always',
        functions: 'always',
      },
    ],
  },
};

```
<br/>

### build.gradle

<br/>

/android/app/build.gradle
<br/> 네이티브 벡터 아이콘 설정 (하단에 작성)

```js
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ]
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
<br/>

### install

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

<br>

프로젝트 시작

```bash
yarn android
```
