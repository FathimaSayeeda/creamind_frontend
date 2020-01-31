<template>
  <b-carousel :autoplay="true">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section
        :class="`hero is-medium is-${carousel.color}`"
        :style="{
          'background-image': `url(${carousel.bg})`,
          'background-size': 'cover'        
        }"
      >
        <div class="hero-body has-text-centered carousel">
          <div class="quote">{{carousel.text1}}</div>
          <div class="quote">{{carousel.text2}}</div>
          <div class="whose">{{carousel.author}}</div>
          <div style= "position:relative; top:125px;"><img :src="carousel.image"/></div>          
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>

</template>

<script>
export default {
  data() {
    return {
      carousels: [
        { image: "/img/logo_finalbig.png", bg: "/img/book.png" , text1:"There are many little ways to enlarge your child's world.", text2:"Love of Books is the best of all." , author:"-JACQUELINE KENNEDY"},
        { image: "/img/logo_finalbig.png", bg: "/img/book3.png" , text1:"There is more treasure in books than" , text2:"in all the pirate's loot on Treasure Island." , author:"-WALT DISNEY"},
        { image: "/img/logo_finalbig.png", bg: "/img/imageedit_5_6818750900.png" , text1:"Books are the plane, and the train, and the road.", text2:"They are the destination, and the journey. They are home." , author:"-ANNA QUINDLEN"},
        { image: "/img/logo_finalbig.png", bg:"/img/book4.png" ,text1:"Children are made readers" , text2:"on the laps of their parents.",author:"-EMILIE BUCHWALD"},
        { image: "/img/logo_finalbig.png", bg:"/img/book5.png" ,text1:"I think it’s the books that you read when you’re young",text2:"that live with you forever." ,author:"-J.K.Rowling"}
      ]
    };
  }
};
</script>

<style>
.quote {
  font-family: "Dancing Script", cursive;
  font-size:45px;
  color:rgb(22, 153, 149);
}
.whose {
  font-family : "Amatic SC", cursive;
  color:rgb(22, 153, 149);
  font-size: 40px;
}
</style>
