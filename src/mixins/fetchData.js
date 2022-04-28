export default{
    data(){
        return{
          loading: true,
          api: null,
        }
      },
      methods:{
       async fetchData(url){
           this.loading = true
           this.api = null
          const link = `http://localhost:3000${url}`
          const response = await fetch(link)
          const responseJSON = await response.json()
            setTimeout(()=>{
                return this.api = responseJSON, this.loading = false
            },1000)
          
        }
      }
}