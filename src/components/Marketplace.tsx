import { useState, useEffect } from 'react';
import { ShoppingBag, Plus, MessageCircle } from 'lucide-react';
import { getApprovedProducts, Product } from '../lib/supabase';
import ProductForm from './ProductForm';
import toast from 'react-hot-toast';

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState('shop');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await getApprovedProducts();
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Error loading products');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="marketplace" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Digital Marketplace
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Shop quality products or list your items for sale
          </p>
        </div>

        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex justify-center space-x-8">
              <button
                onClick={() => setActiveTab('shop')}
                className={`${
                  activeTab === 'shop'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium`}
              >
                Shop From Us
              </button>
              <button
                onClick={() => setActiveTab('sell')}
                className={`${
                  activeTab === 'sell'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium`}
              >
                Sell With Us
              </button>
            </nav>
          </div>

          <div className="mt-8">
            {activeTab === 'shop' ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.length === 0 ? (
                  <div className="col-span-full text-center text-gray-500 py-12">
                    <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No products</h3>
                    <p className="mt-1 text-sm text-gray-500">Be the first to list a product!</p>
                    <button
                      onClick={() => setActiveTab('sell')}
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Add Product
                    </button>
                  </div>
                ) : (
                  products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-w-16 aspect-h-9">
                        <img 
                          src={product.image_url} 
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                        <p className="mt-2 text-gray-500 line-clamp-2">{product.description}</p>
                        <p className="mt-2 text-xl font-semibold text-gray-900">KSh {product.price.toLocaleString()}</p>
                        <a
                          href={`https://wa.me/${product.seller_phone}?text=I'm interested in ${product.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
                        >
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Contact Seller
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <ProductForm />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}