// login.js

// 로그인 폼 모듈
var loginForm = {
    // 폼 요소
    elements: {
      form: document.getElementById("login-form"),
      usernameInput: document.getElementById("username"),
      passwordInput: document.getElementById("password"),
      errorMessage: document.getElementById("error-message"),
      submitButton: document.getElementById("login-button")
    },
    // 로그인 처리 함수
    handleLogin: function() {
      var username = this.elements.usernameInput.value;
      var password = this.elements.passwordInput.value;
      if (username === "myusername" && password === "mypassword") {
        alert("로그인 성공!");
      } else {
        this.showErrorMessage("잘못된 사용자 이름 또는 비밀번호입니다.");
      }
    },
    // 에러 메시지 출력 함수
    showErrorMessage: function(message) {
      this.elements.errorMessage.innerHTML = message;
    },
    // 초기화 함수
    init: function() {
      var self = this;
      this.elements.form.addEventListener("submit", function(event) {
        event.preventDefault();
        self.handleLogin();
      }.bind(this)); // bind 메소드를 사용하여 this를 loginForm 객체로 바인딩
    }
  };
  
  // 로그인 모듈 실행
  loginForm.init();
  