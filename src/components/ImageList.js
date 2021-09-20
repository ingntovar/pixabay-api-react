import Image from "./Image";



const ImageList = ({images, inputData}) => {


  return ( 

    <div className="col-12 p-5 row">
      {inputData 
      ?
        images.map(image=>(
          <Image key={image.id} dataImage={image}/>
        ))
      :
        null
      }
      
    </div>
  );
}
export default ImageList;