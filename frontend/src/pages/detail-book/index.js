import React from "react";
import "./styles.less";
import Layout from "../../components/Layout";
import { useParams, useNavigate } from "react-router-dom";

const DetailBook = ({
  src,
  title,
  author,
  category,
  quantity,
  liked,
  sumary,
}) => {
  let { id } = useParams();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="detail-book">
        <button onClick={() => navigate(-1)}>{"< Voltar"} </button>
        <div className="detail-book-container">
          <div className="detail-book-cover">
            <img src={src} alt="" />
          </div>
          <div className="book-description">
            <div className="book-description-details">
              <span>{title}</span>
              <div>
                <div>
                  <p>{author}</p>
                  <p>{category}</p>
                </div>
                <div className="book-description-like">
                  {liked ? <img src="" alt="" /> : <img src="" alt="" />}
                </div>
              </div>
              <p>Em estoque: {quantity} unidades</p>
              <p>{sumary}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default DetailBook;
