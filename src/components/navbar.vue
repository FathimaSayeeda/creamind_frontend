<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item href="#">
        <img
          style="max-height: 200px"
          alt="creaMind logo"
          src="/img/logo_final.png"
        />
        <div>
          <p class="name">THE CREA MIND</p>
          <p class="tagline">Creating Beautiful Junior Minds.</p>
        </div>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item>Home</b-navbar-item>
      <b-navbar-item
        ><router-link to="/about">About</router-link></b-navbar-item
      >
      <b-navbar-item>
        <b-navbar-dropdown label="Find a Book!">
          <b-navbar-item>By Author</b-navbar-item>
          <b-navbar-item>By Age Group</b-navbar-item>
          <b-navbar-item>By Title</b-navbar-item>
          <b-navbar-item>By Category</b-navbar-item>
        </b-navbar-dropdown>
      </b-navbar-item>
      <b-navbar-item>Announcements</b-navbar-item>
      <b-navbar-item><router-link to="/blog">Blog</router-link></b-navbar-item>
      <b-navbar-dropdown label="Get in Touch!">
        <b-navbar-item><img src="/img/mob.png" />&nbsp; +91 9946994895</b-navbar-item>
        <b-navbar-item><img src="/img/insta.png" />&nbsp; thecreamind</b-navbar-item>
        <b-navbar-item
          ><img src="/img/gmail.png" />&nbsp; thecreamind@gmail.com</b-navbar-item
        >
        <b-navbar-item><img src="/img/fb.png" />&nbsp; The Crea Mind</b-navbar-item>
        <b-navbar-item
          ><img src="/img/whatsapp.png" />&nbsp; +91 9074417193</b-navbar-item
        >
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<style>
.one {
  margin-bottom: 0px;
  padding-bottom: -50px;
}

.name,
.img {
  line-height: 0.8;
  margin-top: 5px;
  max-height:5rem;
}
.name {
  font-size: 60px;
  font-family: "Amatic SC", cursive;
  font-weight: 800;
  color: crimson;
  padding-left: -30px;
}

.navbar-end .navbar-item {
  font-family: "Josefin Sans", sans-serif;

  font-weight: bolder;
  letter-spacing: 2px;
  
}
.tagline {
  font-family: "Dancing Script", cursive;
  color: crimson;
  font-size: 20px;
  letter-spacing: 2px;
}
</style>
