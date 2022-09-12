<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style scoped></style>

<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="grid">
          <div class="col-3">
            <p class="footer__name">SOLVVE company</p>
            <p>Creation and support of web applications</p>
            <p>© {{ year }}. All rights reserved</p>
          </div>
          <div class="col-3">
            <p class="footer__autors">The authors of this application:</p>
            <p>
              <a href="https://github.com/vorofikin" target="_blank">
                Andrii Nikiforov
                <i class="pi pi-github" aria-hidden="true"></i>
              </a>
            </p>
            <p>
              <a href="https://github.com/anastasiia-perederii" target="_blank">
                Anastasiia Perederii
                <i class="pi pi-github" aria-hidden="true"></i>
              </a>
            </p>
            <p>
              <a href="https://github.com/olsy-solvve" target="_blank">
                Oleksandr Sypalo
                <i class="pi pi-github" aria-hidden="true"></i>
              </a>
            </p>
            <p>
              <a href="https://github.com/olga-dudarieva" target="_blank">
                Olha Dudareva
                <i class="pi pi-github" aria-hidden="true"></i>
              </a>
            </p>
            <P>
              <a href="https://github.com/volvital" target="_blank">
                Vitalii Volokha
                <i class="pi pi-github" aria-hidden="true"></i>
              </a>
            </P>
            <p>
              <a href="https://github.com/kirzakharoff" target="_blank">
                Kyrylo Zakharov
                <i class="pi pi-github" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div class="col-3">
            <p class="footer__social">Our social media profiles:</p>
            <p class="footer__social-icons">
              <a
                href="https://www.facebook.com/solvvesoftware/"
                target="_blank"
              >
                <i class="pi pi-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://solvve.com/expertise/" target="_blank">
                <i class="pi pi-globe" aria-hidden="true"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=380991757259"
                target="_blank"
              >
                <i class="pi pi-whatsapp" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/solvve/"
                target="_blank"
              >
                <i class="pi pi-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div class="col-3">
            <div>
              <a
                href="https://solvve.com/expertise/"
                class="button"
                target="_blank"
                >Contact</a
              >
            </div>
            <p>Write to us to find out more</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #061634;
  color: #6479a2;

  border: 1px;
  border-style: solid;
  border-color: white;
  display: flex;
  justify-content: center;
  padding: 5px;

}

.footer p {
  margin-top: 0px;
  margin-bottom: 0px;
}

p.footer__name {
  font-size: 28px;
  margin-bottom: 10px;
  line-height: normal;
}

.autor {
  color: white;
}

p.footer__social-icons {
  color: white;
  font-size: 32px;
}

p.footer__social-icons a {
  color: white;
  text-decoration: none;
  margin-right: 30px;
}

p.footer__social-icons a:last-child {
  margin-right: 0px;
}

p.footer__social-icons a:hover {
  color: #ffe400;
}

.viber_button {
  margin-left: auto;
  margin-right: auto;
}
.button {
  font-weight: 700;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  display: inline-block;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  border-radius: 50px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 23px;
  padding-right: 23px;
  margin-bottom: 15px;
  margin-top: 15px;
  transition: 0.2s ease-out;
}

.button:hover {
  color: #061634;
  background-color: white;
}

.col-3 {
  text-align: center;
}
</style>
