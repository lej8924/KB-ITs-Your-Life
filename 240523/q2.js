//Compile: Vue templates은 render functions로 컴파일된다. 
//render functions는 virtual DOM tree를 반환한다. 
//이 과정은 빌드 단계를 통해 미리 수행되거나, 런타임 컴파일러를 사용하여 그때 수행될 수 있다.



//Mount: runtime renderer는 render functions를 부르며, virtual DOM tree를 확인한 후 실제 DOM node를 생성한다. 
//이 과정은 reactive effect로 수행되므로, 사용된 모든 reactive 종속성을 추적한다.




//Patch: state가 변경되면 새로운 업데이트된 virtual DOM 트리가 생성된다. 
//그리고 이전의 virtual DOM tree와 비교하여 변경된 부분을 실제 DOM에 적용시킨다.