import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Смартфон X-Tech Pro',
    price: '89 990',
    category: 'Смартфоны',
    image: 'https://cdn.poehali.dev/projects/b0b078c6-4312-4967-8b27-5ac0ef50ba8c/files/78cb09b0-15ed-4b8c-a3d6-d388ae841288.jpg',
    specs: ['8GB RAM', '256GB', '5G'],
    rating: 4.9
  },
  {
    id: 2,
    name: 'Наушники NeoSound Pro',
    price: '24 990',
    category: 'Аудио',
    image: 'https://cdn.poehali.dev/projects/b0b078c6-4312-4967-8b27-5ac0ef50ba8c/files/173b804b-1e2c-40dd-b370-eaad5073eba1.jpg',
    specs: ['ANC', 'Bluetooth 5.3', '40ч'],
    rating: 4.8
  },
  {
    id: 3,
    name: 'Ноутбук Gaming Master',
    price: '149 990',
    category: 'Компьютеры',
    image: 'https://cdn.poehali.dev/projects/b0b078c6-4312-4967-8b27-5ac0ef50ba8c/files/efda6989-9525-4a13-aeca-73929cd8dbfd.jpg',
    specs: ['RTX 4070', '32GB RAM', '144Hz'],
    rating: 5.0
  }
];

const reviews = [
  {
    id: 1,
    name: 'Алексей М.',
    text: 'Отличный магазин! Быстрая доставка, товары соответствуют описанию. Смартфон пришёл через 2 дня.',
    rating: 5,
    date: '15.11.2024'
  },
  {
    id: 2,
    name: 'Мария К.',
    text: 'Наушники просто космос! Качество звука на высоте, шумоподавление работает идеально.',
    rating: 5,
    date: '12.11.2024'
  },
  {
    id: 3,
    name: 'Дмитрий В.',
    text: 'Купил ноутбук для работы и игр. Мощный, тихий, стильный. Консультанты помогли с выбором.',
    rating: 5,
    date: '08.11.2024'
  }
];

const advantages = [
  {
    icon: 'Zap',
    title: 'Быстрая доставка',
    description: 'Доставка по Москве за 2 часа, по России — 1-3 дня'
  },
  {
    icon: 'Shield',
    title: 'Гарантия качества',
    description: 'Официальная гарантия на всю технику до 3 лет'
  },
  {
    icon: 'Award',
    title: 'Лучшие цены',
    description: 'Конкурентные цены и регулярные акции'
  },
  {
    icon: 'Headphones',
    title: 'Поддержка 24/7',
    description: 'Консультация специалистов круглосуточно'
  }
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const categories = ['Все', 'Смартфоны', 'Аудио', 'Компьютеры', 'Аксессуары'];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-border/50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Cpu" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TechStore
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-background opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Технологии будущего
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                доступны сегодня
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Откройте для себя передовые технологии и инновационные устройства
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 animate-glow">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Перейти в каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Наш <span className="text-primary">каталог</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'bg-primary' : ''}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-secondary">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                  <CardTitle className="mb-3">{product.name}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((spec, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {product.price} ₽
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Почему выбирают <span className="text-primary">нас?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={advantage.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Отзывы <span className="text-primary">клиентов</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={review.id}
                className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Свяжитесь <span className="text-primary">с нами</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <Icon name="Mail" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@techstore.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <Icon name="MapPin" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Технологическая, 1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Cpu" size={24} className="text-primary" />
              <span className="font-bold">TechStore</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 TechStore. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
