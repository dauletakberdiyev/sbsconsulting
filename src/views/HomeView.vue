<template>
  <section class="top-banner my-5 mx-4 d-flex flex-column">
    <div class="text-start font-size-48 fw-bold lh-sm mb-4" v-html="$t('home.main.title_text')">
    </div>
    <div class="text-star mb-5">
      {{ $t('home.main.desc')}}
    </div>
    <div class="text-center">
      <button class="whatsapp-click btn bg-dark-blue text-white px-5 py-3 fw-bold" @click="this.redirectToWhatsapp()">
        {{ $t('home.main.whatsapp_click')}}
      </button>
    </div>
  </section>
  <section class="job-desc mt-5 px-4 py-5  bg-dark-blue text-white">
    <div class="text-center font-size-32 fw-bold mb-3">
      {{ $t('home.job_desc.title_text')}}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item font-size-16 bg-dark-blue text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square me-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        {{$t('home.job_desc.job_1')}}
      </li>
      <li class="list-group-item font-size-16 bg-dark-blue text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square me-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        {{$t('home.job_desc.job_2')}}</li>
      <li class="list-group-item font-size-16 bg-dark-blue text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square me-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        {{$t('home.job_desc.job_3')}}</li>
      <li class="list-group-item font-size-16 bg-dark-blue text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square me-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        {{$t('home.job_desc.job_5')}}</li>
    </ul>
  </section>
  <section class="summer-camp mb-5 mx-4 pt-5">
    <div class="text-center font-size-32 fw-bold mb-3">
      {{ $t('home.summer_camp.title_text') }}
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card text-white">
            <img src="/turkey1.jpg" class="card-img" alt="..." width="350" height="450">
            <div class="card-img-overlay bg-img d-flex flex-column justify-content-between pb-5">
              <h1 class="card-title fw-bold">{{$t('home.summer_camp.turkey')}}</h1>
              <div>
                <p class="card-text fs-4">{{$t('home.summer_camp.tr_desc')}}</p>
                <button class="btn btn-light font-size-14 opacity-50" @click="this.redirectToWhatsapp()">
                  {{$t('home.summer_camp.info')}}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card bg-dark text-white">
            <img src="/germany.jpg" class="card-img" alt="..." width="350" height="450">
            <div class="card-img-overlay bg-img d-flex flex-column justify-content-between pb-5">
              <h1 class="card-title fw-bold">{{$t('home.summer_camp.german')}}</h1>
              <div>
                <p class="card-text fs-4">{{$t('home.summer_camp.gr_desc')}}</p>
                <button class="btn btn-light font-size-14 opacity-50" @click="this.redirectToWhatsapp()">
                  {{$t('home.summer_camp.info')}}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <hr/>
  <section class="europe-trip mb-5 mx-4 pt-4">
    <div class="text-center font-size-32 fw-bold">
      {{$t('home.europe.title_text')}}
    </div>
    <div class="font-size-17 d-flex justify-content-center mt-3">
      <div class="text-center px-4 py-2 me-5 bg-light-blue font-light-yellow fw-bold w-100 round-10">
        {{$t('home.europe.ad_1')}}
      </div>
      <div class="text-center px-4 py-2 bg-light-blue font-light-yellow fw-bold w-100 round-10">
        {{$t('home.europe.ad_2')}}
      </div>
    </div>
    <div class="desc mt-5">
      <div class="d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-right mt-2 me-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"/>
        </svg>
        <div class="text-start w-100">
          {{$t('home.europe.desc_1')}}
        </div>
      </div>
      <div class="d-flex mt-4">
        <div class="text-end w-100">
          {{$t('home.europe.desc_2')}}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left mt-2 ms-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
        </svg>
      </div>
    </div>
    <button class="btn bg-light-blue font-light-yellow mt-5 fw-bold py-3 w-100 font-size-18" @click="this.redirectToWhatsappSecond()">
      {{$t('home.europe.btn_text')}}
    </button>
  </section>
  <hr/>
  <section class="consulting mt-3 mb-5 mx-4 pt-5">
    <div class="text-center font-size-32 fw-bold">
      {{$t('home.consulting.title_text')}}
    </div>
    <div class="text-center font-size-16">
      {{$t('home.consulting.desc')}}
    </div>
    <div class="text-center d-flex flex-column mt-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-down-square w-100" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
      </svg>
      <button class="btn bg-dark-blue text-white mt-4 fw-bold px-3 py-3 btn-round" @click="this.redirectToWhatsapp()">
        {{$t('home.consulting.btn_text')}}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",

  methods:{
    redirectToWhatsapp(){
      window.open(this.whatsappLink, '_blank');
    },
    redirectToWhatsappSecond(){
      window.open(this.whatsappLinkSecond, '_blank');
    }
  }
}
</script>