import Feature from '../../components/Feature';
import FeatureFour from '../../components/FeatureFour';
import ProductCard from '../../components/ProductCard';
import Title from '../../components/Title';
import { itemsList } from '../../speakers_data';
import ScrollToTop from '../../utils/ScrollTop';


const Speakers = () => {

  return (
    <div>
      <Title title="SPEAKERS" />
      <ScrollToTop />
      <div className="max-w-5xl mx-auto px-4 space-y-28 mt-20">
        {itemsList.map((item, index) => (
          <ProductCard item={item} index={index} key={item.id} title="speaker" />
        ))}
      </div>
      <Feature />
      <FeatureFour />
    </div>
  );
};

export default Speakers;