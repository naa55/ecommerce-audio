import { itemsList } from '../headphone_data';
import ProductCard from '../components/ProductCard';
import ScrollToTop from '../utils/ScrollTop';
import Title from '../components/Title';
import Feature from '../components/Feature';
import FeatureFour from '../components/FeatureFour';

const Headphones = () => {

  return (
    <div>
      <Title title="HEADPHONES"/>
      <ScrollToTop />
      <div className="max-w-5xl mx-auto px-4 space-y-28 mt-20">
        {itemsList.map((item, index) => (
          <ProductCard item={item} index={index} key={item.id} title="headphone" />
        ))}
      </div>
      <Feature/>
      <FeatureFour/>
    </div>
  );
};

export default Headphones;