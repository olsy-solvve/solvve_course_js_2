<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <p class="footer__name">SOLVVE company</p>
            <p>Creation and support of web applications</p>
          </div>
          <div class="col-4">
            <p class="footer__social">Our social media profiles:</p>
            <p class="footer__social-icons">
              <a href="#" target="_blank">
                <i class="fa fa-facebook" aria-hidden="true"> </i>
              </a>
              <a href="#" target="_blank">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa fa-youtube" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div class="col-4">
            <div>
              <a href="#" class="button" target="_blank">Contact Viber</a>
            </div>
            <p>Write to me <br />to find out more</p>
            <p>{{ year }}</p>
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
  padding-top: 90px;
  padding-bottom: 190px;
}

.footer p {
  margin-top: 0px;
  margin-bottom: 15px;
}

p.footer__name {
  font-size: 28px;
  margin-bottom: 10px;
  line-height: normal;
  /* font-family: 'Merriweather', serif; */
}

p.footer__social {
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

.button {
  font-weight: 700;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  display: inline-block;
  border-width: 2px;
  border-color: white;
  border-style: solid;
  border-radius: 50px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 23px;
  padding-right: 23px;
  margin-bottom: 13px;
  transition: 0.2s ease-out;
}

.button:hover {
  color: #061634;
  background-color: white;
}

.col-4 {
  text-align: center;
}
</style>