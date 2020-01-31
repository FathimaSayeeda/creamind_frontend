<template>
<div class="container">
     <div class="level">
         <div class="level-left">
            <h2> Add/Edit Book</h2>
         </div>
         <div class="level-right">
             <b-field>
            <b-autocomplete
                v-model="name"
                placeholder="Search"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="user.first_name"                
                @select="option => selected = option">
            </b-autocomplete>
            </b-field></div>
     </div>   
</div>
</template>