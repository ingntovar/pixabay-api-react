import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import ImageList from "./components/ImageList";
import { apiKey } from "./helpers"

function App() {

  const [inputData, setInputData]=useState()
  const [images, setImages]=useState([])
  const [totalPages, setTotalPages]=useState(1)
  const [currentPage, setCurrentPage]=useState(1)

  useEffect(()=>{
    if(inputData!==''){
      const requestAxios= async ()=>{
        const numberResults=10
        const url=`https://pixabay.com/api/?key=${apiKey}&q=${inputData}&per_page=${numberResults}&page=${currentPage}`
        const imgRequest=await axios.get(url)
        console.log(imgRequest.data)
        setImages(imgRequest.data.hits)


        const calculatePagesUsed=Math.ceil(imgRequest.data.totalHits/numberResults)
        setTotalPages(calculatePagesUsed)
        const jumbotron=document.querySelector('.jumbotron')
        jumbotron.scrollIntoView({behavior:'smooth'})
      }
      requestAxios()
    }

  }, [inputData, currentPage])


  const handleNextPage= ()=>{
    const newCurrentPage=currentPage+1
    if(newCurrentPage>totalPages) return
    setCurrentPage(newCurrentPage)

  }

  const handlePrevPage=()=>{
    const newCurrentPage=currentPage-1
    if(newCurrentPage<=0) return
    setCurrentPage(newCurrentPage)

  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          Images Searcher
        </p>
        <Form setInputData={setInputData} />
      </div>
      <div className="row justify-content-center">
        <ImageList images={images} inputData={inputData} />
        {currentPage===1 ? null 
        :
        <button type="button" className="btn btn-info mr-1" onClick={handlePrevPage}>
           &laquo; Prevous
        </button>
        }
        {currentPage===totalPages ? null
        :
        <button type="button" className="btn btn-info" onClick={handleNextPage}>
          Next &raquo;
        </button>
        }
      </div>
    </div>
  );
}

export default App;
