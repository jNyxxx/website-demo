-- 1. Create Products Table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10,2),
    category VARCHAR(50), -- 'necklace', 'charm', 'bracelet'
    images TEXT[],        -- Array of image filenames for the slider
    is_trendy BOOLEAN DEFAULT false
);

-- 2. Create Orders Table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    items JSONB,          -- Stores the cart details
    total DECIMAL(10,2),
    status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Insert Your Data (Matches your screenshots)
INSERT INTO products (name, price, category, images, is_trendy) VALUES 
('Sakura Kitty Garden', 28.00, 'necklace', ARRAY['image_0.png', 'image_7.png'], true),
('Angel Wings Necklace', 32.00, 'necklace', ARRAY['image_1.png', 'image_0.png', 'image_7.png'], true),
('Pegasus Dream', 30.00, 'bracelet', ARRAY['image_7.png'], true),
('Starry Phone Charm', 15.00, 'charm', ARRAY['image_8.png'], false),
('Crystal Heart', 22.00, 'necklace', ARRAY['image_9.png'], false);