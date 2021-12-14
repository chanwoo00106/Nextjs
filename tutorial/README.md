# Next Js

Next에서 빌드 타임에 data를 생성 하려면, 해당 컴포넌트에서<br>
`getStaticPaths` + `getStaticProps`를 export 해줘야 한다.

## getStaticProps 반환 객체

어떤 path들에 대해서 정적 페이지 생성을 할지 정하는 getStaticPaths 함수는<br>
반환 객체로 paths 키와 fallback 키를 반드시 포함시켜야한다.

```js
// getStaticPaths
return {
  paths: [
    { params: { id: '1' } },
    { params: { id: '2' } }
  ],
  fallback: ...
}
```

Next JS는 `users/1`, `users/2` 페이지를 빌드타임에 생성하게 된다.

## paths

어떤 path의 페이지들을 빌드 타임에 생성할지 정하는 배열이다.

## fallback

안에 들어갈 수 있는 값은 boolean 또는 'blocking' 값이다

- ### false인 경우

  `getStaticPaths`가 반환하지 않은 path에서는 404에러를 띄운다.

  #### 아래와 같은 경우 사용

  적은 숫자의 path만 프리렌더링 해야하는 경우<br>
  새로운 페이지가 추가 될 일이 많지 않은 경우<br>
  -> 새로운 페이지가 자주 추가 된다면, 추가될 때 마다 다시 빌드해줘야한다

- ### true인 경우

  1. `getStaticPaths` 가 반환한 path들은 빌드 타임에 HTML로 렌더링된다

  2. 이외의 path들에 대한 요청이 들어온 경우, 404 페이지를 반환하지 않고,<br> 페이지의 "fallback" 버전을 먼저 보여준다

  3. Next js가 요청된 path에 대해서 getStaticProps 함수를 이용하여<br>
     HTML 파일과 JSON 파일을 만들어낸다

  4. 백그라운드 작업이 끝나면, 요청된 path에 해당하는 JSON 파일을 받아서<br>
     새롭게 페이지를 렌더링한다.

  5. 새롭게 생성된 페이지를 기존의 빌드시 프리렌더링 된 페이지 리스트에 추가한다.

  #### 아래와 같은 경우 사용

  데이터에 의존하는 정적 페이지를 많이 가지고 있으나, 빌드 시에 모든 페이지를 생성하는건 너무나 큰 작업일 때

- ### `blocking`인 경우

  true인 경우와 비슷하지만, 생성중에 사용자에게 fallback 페이지를 보여주지 않고,<br>
  ssr처럼 동작해서 아무것도 보여주지 않는다.
