import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails';
import { itemsList } from '../../earphones_data';
import DetailsFeature from '../../components/DetailsFeature';
import Gallery from '../../components/Gallery';
import Other from '../../components/Other';
import FeatureFour from '../../components/FeatureFour';

const Earphone = () => {
  const { id } = useParams();
  const product = itemsList.find((item) => item.id === parseInt(id));

  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="px-4 mt-20">
        <ProductDetails product={product} key={product.id} />
      </div>
      <div>
        <DetailsFeature feature={product.features} includes={product.includes}/>
      </div>
      <div>
        <Gallery gallery={product.gallery}/>
      </div>
      <div>
        <Other others={product.others} title="headphone"/>
      </div>
      <div>
        <FeatureFour/>
      </div>
    </div>
  );
};

export default Earphone;
