import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchProducts } from "../slices/search";
import { Container, Grid } from "@mui/material";
import MediaCard from "../components/products/NewFile";

function SearchPage() {
  const params = useParams();
  const searchState = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const list = searchState?.list?.data;

  console.log(list);

  useEffect(() => {
    dispatch(searchProducts(params.q));
  }, [params.q, dispatch]);

  return (
    // <div>
    //   {list &&
    //     list.map((item, index) => {
    //       return <p key={index}>{item.attributes.title}</p>;
    //     })}
    // </div>
    <Container>
      <Grid container spacing={4}>
        {list &&
          list.map((item) => (
            <Grid item key={item.id} sx={12} sm={8} md={6}>
              <MediaCard
                id={item.id}
                title={item.attributes.title}
                text={item.attributes.description}
                price={item.attributes.price}
                img={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default SearchPage;
