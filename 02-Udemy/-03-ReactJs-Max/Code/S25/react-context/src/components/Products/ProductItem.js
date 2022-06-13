import React, { useContext } from 'react';
import { useStore } from '../../hooks-store/store';
// import { useDispatch } from 'react-redux';
// import { toggleFav } from '../../store/actions/products';
// import './ProductItem.css';
// const dispatch = useDispatch();

//? import { ProductsContext } from '../../context/products-context';
import Card from '../UI/Card';

const ProductItem = React.memo(props => {
  //? const productCtx = useContext(ProductsContext)

  const [state, dispatch] = useStore(false)

  const toggleFavHandler = () => {

    //? productCtx.toggleFav(props.id)

    dispatch('TOGGLE_FAV', props.id)
  };


  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
