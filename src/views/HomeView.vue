<template>
        <main>
          <div v-if="loading">
            <PageLoading/>
          </div>
        <transition>  
            <div v-if="api" class="conteudo">
             <div>  
                <h1>Sobre {{api.titulo}}</h1>
                <p>{{api.descricao}}</p>

                    <router-link   to="/cursos" v-slot="{href, route, navigate}">
                      <button :href="href" @click="navigate" class="btn-cursos">
                        {{ route.name }}
                      </button>
                    </router-link>
                    
                  <div>
                    <h2>Avaliações</h2>
                    <ul>
                      <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                        <p>{{avaliacao.nome}}</p>
                        <p>{{avaliacao.descricao}}</p>
                      </li>
                    </ul>
                  </div>
               </div>   
                <img src="@/assets/aprender.png" alt="Aprenda Web Design">
            </div> 
        </transition>    
        </main>
        
</template>

<script>
import fetchData from "@/mixins/fetchData.js"


export default {
  name: 'HomeView',
  mixins: [fetchData],
  created(){
    this.fetchData('/home')
  }
}
</script>

<style>
.btn-cursos{
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 2px rgba(0,0,0,0.1);
  font-family: "Avenir", Arial, Helvetica, sans-serif;

}
</style>
