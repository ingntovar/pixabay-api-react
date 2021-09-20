const Image = ({dataImage}) => {

  const {largeImageURL, likes, previewURL, tags, views}=dataImage

  return ( 
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <div className="card-text">{likes} likes</div>
          <div className="card-text">{views} views</div>
        </div>
        <div className="card-footer">
          <a 
            href={largeImageURL} 
            className="btn btn-primary btn-block"  
            target="_blank"
            rel="noopener noreferrer"
          >
          See image
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Image;