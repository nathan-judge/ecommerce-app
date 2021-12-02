INSERT INTO usertypes (id, usertype_desc)
VALUES (1, 'Admin'),
(2, 'Guest');

INSERT INTO users (email, password, usertype_id)
VALUES ('admin1@gmail.com', 'admin1', 1);


INSERT INTO products (name, price, quantity, thumbnail_photo_url, description, category, number_of_ratings, avg_rating)
VALUES ('Sky Branches-Birch Trees Wall Art', 109.99, 5, 'https://image.s5a.com/is/image/TheBay/628840006978_main?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0', 'Iconic birch trees serve as the essence in this stunning giclee landscape reproduction. Muted and magnificently executed, the conventional, earthy palette is a stroke of genius artwork by Irina K stretched on solid MDF bars.', 'Paintings', 500, 4.2),
('Turquoise Water And Sunny Beams', 59.99, 67, 'https://i5.walmartimages.ca/images/Enlarge/121/400/999999-641393121400.jpg', 'This canvas art is printed on the highest quality cotton canvas and gallery wrapped (design continues on the side) around a solid 1 inch wood subframe. We only use the finest quality ink jet printers according to the giclée process and highest resolution images when making our canvas prints to ensure that you receive a rich, flawless ,un-pixelated piece of artwork everytime. ', 'Paintings', 20, 3.1),
('Jinlaili 30CM Christmas Door Wreath', 35.63, 35, 'https://m.media-amazon.com/images/I/91RUCrHS3VL._AC_SL1500_.jpg', 'The christmas wreath is made of plastic so it is durable,non-toxic and harmless, no bad smell, not easy to be corroded or broken, you can keep it for long time.Bright colors for a pleasant atmosphere.
The door garland is about 30cm in diameter, Hang it above your fireplace, place it on your front door, windows, columns, or on a living room wall; This wreath will bring an enjoyable ambiance on Christmas Eve and Christmas Day.', 'Decorations', 3, 5),
('Christmas Doormat Indoor Outdoor Decor', 35.00, 3, 'https://m.media-amazon.com/images/I/A1ELnYlwCRL._AC_SL1500_.jpg', 'Perfect for Christmas Decor : Welcome guests to your home with this unique, seasonal Christmas Decorations Door Mat. Perfect for any deck, patio, porch, veranda and entryway and extend a warm welcome to all who enter your home. The Christmas Door Mat is made of Crystal velvet super soft fabric, non-woven bottom, non-slip, washable, durable and not easy to damage.', 'Decorations', 80, 2.8),
('GEYUEMEY Welcome Sign', 16.00, 50, 'https://m.media-amazon.com/images/I/71nk2pHMpuL._AC_SL1500_.jpg', 'The Welcome Sign with thickened 3D effect in a classical script, vivid charming design is a friendly and hospitable way to make your house more of an approachable home and add a bold and inviting feeling to any wall or home so everyone will feel warmth and familiarity!Tired of flimsy sign,our Home Sweet Home Sign decor is worthy a try!', 'Decorations', 3000, 3.8),
('Muzagroo Art Pig with Glasses', 28.00, 30, 'https://m.media-amazon.com/images/I/71+8J4gXNeL._AC_SL1100_.jpg', 'Lovely pig with glasses,adorkable expression makes you smile every time you see it. 100% hand painted oil painting, with raised texture on canvas, high quality canvas and environmental oil paints material. Size:24x24in(60x60cm)', 'Paintings', 104, 4.2),
('Unframed Inspirational Lettering Art Print', 25.00, 0, 'https://m.media-amazon.com/images/I/5150ftlKeFL._AC_SL1001_.jpg', 'With inspirational wall art picture to decorate your home is an amazing and affordable way. Combined unique, colorful letters also can instantly decorate your home and make your room atmosphere more interesting', 'Paintings', 233, 1.5),
('Everlands Art Print Canvas Painting', 59.00, 5, 'https://m.media-amazon.com/images/I/714lSs5xOqL._AC_SL1001_.jpg', 'Vibrant Flowers Canvas Print Wall Art Giclee Artwork, HD pictures photo printed on canvas. Home decorations for living room, bedroom, office, bathroom, kitchen, hotel, bar etc.', 'Paintings', 40, 4.4),
('Aurora Scenery Painting', 72.00, 120, 'https://m.media-amazon.com/images/I/61-6ncHbD-L._AC_SL1200_.jpg', 'Wall Art Canvas prints 1 Panels Frame size:60x90cm x1pcs(24x36inchx1pcs). Wall Decorations Paintings for Living Room, Bedroom, Kitchen, Office, Hotel, Dining Room, Office, Bar etc.. Due to Different Brand of Monitors, Actual Wall Art Colors May be Slightly Different from the Product Image.', 'Paintings', 45, 1.2),
('Beauty Portrait Wall Art Abstract Knife Painting', 35.63, 42, 'https://m.media-amazon.com/images/I/71PDWZE3rDL._AC_SL1150_.jpg', 'HD prints beauty portrait canvas art framed ready to hang. Canvas art is vivid color, waterproof, UV resistant. High quality of the artwork makes feel of original nature and masterpiece.
A great gifts ideal for Valentines Day, Christmas, New Year, business gift and other purpose. Perfect home decoration choice for living room, bedroom, bathroom, kitchen, diningroom, office, hotel, bar wall decor and etc.', 'Paintings', 453, 2.3),
('5 Piece Wall Art Mountains Painting', 58.00, 15, 'https://m.media-amazon.com/images/I/61dqIujNNuL._AC_SL1000_.jpg', 'Size:10x16inchx2pcs, 8x20inchx2pcs, 8x24inchx1pcs, a total of 5 panels. High Definition Modern Painting Artwork: We use modern advanced micro-spraying technology, highly restore the texture of the picture, rich colors, bring you visual enjoyment.', 'Paintings', 323, 2.9),
('Beautiful Moon phase hammered metal decor', 36.36, 32, 'https://m.media-amazon.com/images/I/71pE8C2uIdS._AC_SL1500_.jpg', 'Unique hammered metal moon phase garland, beautiful celestial piece.', 'Decorations', 32, 4.7),
('Macrame leaves wall hanging', 29.52, 3, 'https://i.etsystatic.com/26369297/r/il/cb8259/2797747270/il_1140xN.2797747270_m5oi.jpg', '✨You can send this unique design dream catcher to yourself, your dearest family, friends, and everyone you loved. Blessing them have good dreams every night!', 'Decorations', 10, 3.5),
('Garden fairy string lights', 20.00, 43, 'https://i.etsystatic.com/28051629/r/il/41a960/3272219415/il_794xN.3272219415_infm.jpg', '⭐️Wide Applications:Can be used indoors and outdoors, such as bedrooms, dormitories, bars, windows, wine glasses, Christmas trees, curtains, galleries, stairs, terraces, tents, backyards, porches, bookcases or pergola, they can add perfection to any space Atmosphere. firefly lights can also be used for various occasions, such as birthdays, weddings, holidays, Christmas, Halloween, lovers, parties, fashion shows and any place you want to decorate', 'Lightings', 30, 4.2),
('LED Window Curtain Lights', 33.52, 7, 'https://i.etsystatic.com/26369297/r/il/deaaa6/2790157824/il_794xN.2790157824_f9c3.jpg', '❤️These curtain lights go perfectly in any room and give just the right amount of illumination, ambience and glow to your space. The Curtain LED Lights are a Tapestry Girls EXCLUSIVE. Get the Curtain LED Lights today while they are still in stock!', 'Lightings', 43, 4.9),
('Tubicen LED Touch Night Light', 44.43, 10, 'https://i.etsystatic.com/22514112/r/il/200e47/2826707459/il_794xN.2826707459_83pp.jpg', 'Tubicen Jingle Series night light fixture is made of excellent quality LED and professional optical configuration, providing 2400K light perfectly to allow for a comfortable lighting experience.', 'Lightings', 80, 3.7),
('Silicone Touch Sensor Cat Night Lamp', 29.99, 25, 'https://i.etsystatic.com/32141424/r/il/a29bf2/3444882275/il_794xN.3444882275_5csz.jpg', 'Desktop Decor | Night Lamp | Description of power switch: Press the power switch on the bottom of the product to turn on the light (the color is warm yellow); press the power switch again to turn off the light. ', 'Lightings', 38, 4.9),
('Cute Duck Silicone LED Light', 37.81, 14, 'https://i.etsystatic.com/29070435/r/il/08f0af/3250787582/il_794xN.3250787582_mif0.jpg', 'ADORABLE DUCK: This adorable duck lamp can take your mind off any problems when you see it.', 'Lightings', 77, 1.3),
('Dried Flower Wreath', 10.95, 23, 'https://i.etsystatic.com/9992882/r/il/861cc6/2784804701/il_794xN.2784804701_am4c.jpg', 'A beautiful white and ivory wreath arranged on a gold hoop made with soft and fluffy dried pampas grass, white dried Italian ruscus, thistle and other dried flowers. This would be a gorgeous soft wall accent in a bedroom, kids room, sunroom, livingroom, entryway or anywhere you like to relax indoors!', 'Decorations', 32, 4.2),
('10PCS Artificial Cherry Blossom Branches', 19.95, 38, 'https://m.media-amazon.com/images/I/61EPNA3L2yL._AC_.jpg', '✿ SUITABLE FOR: Artificial flowers, well made and vibrantly colored, looks realistic and beautiful. Perfect for decorating wedding party, home and garden, office, coffee house and so on. ✿ ADJUSTABLE LEGHT: Stem with steel wire; easy to bend and adjust as required. The stem can be shortened by means of cutting pliers. 5 pieces, flower length: 50cm/20inch. ✿ MULTI-PURPOSE: Artificial cherry blossom flower is great for indoor or outdoor decoration.', 'Decorations', 222, 3.7),
('Madison™ Black Pine Christmas Tree', 59.95, 43, 'https://i5.walmartimages.ca/images/Enlarge/702/322/6000203702322.jpg', 'The 6.5-ft Pre-Lit Madison Pine is the perfect solution for a non-traditional holiday decorating. This unique artificial Christmas tree features 600 ebony branch tips, 400 pre-strung mini clear lights that remain lit even if one burns out, and a convenient tree stand.', 'Decorations', 27, 4.9),
('Costway 6ft Artificial Christmas Tree', 129.95, 76, 'https://i5.walmartimages.com/asr/704275db-4218-4389-b2c6-d6bacafebb1c_1.32ad55e5733b4506a443f3da91a70542.jpeg', 'This is our brand new 6ft artificial Christmas tree which is made of eco-friendly and non-flammable PVC material to provide you with long-term quality service. The unique and distinctive pink tree is guaranteed to be an eye-catcher in any place to bring out romantic atmosphere. Simple style allows you to decorate it freely with Christmas stockings, colored balls, lights or other ornaments according to your own preferences. It is effortless to make the tree fluff due to its hinged construction, while also facilitating its assemble and storage.', 'Decorations', 52, 3.9),
('Twinkle Lights for Bedroom Fairy Lights ', 35.95, 53, 'https://m.media-amazon.com/images/I/712plC8xCEL._AC_SL1150_.jpg', 'Lighting up your nights. Total 12 LED star shape string lights, creating bright charming sight and a warm atmosphere for you. Plus, 8.2ft lead wire, more flexible to decorated on the curtain, window, floors, ceilings, balcony, corridors, patio, trees or other places. With memorable controller, the lighting mode will not change after unplugged.Great for Festivals, Holiday, Wedding, Christmas, Parties, Home Decor and more to create a brilliant visual effect.', 'Lightings', 437, 4.2),
('African Women Fashion Canvas Set Wall Art', 79.95, 23, 'https://cdn.shopify.com/s/files/1/1568/8443/products/lobby_64_7cf2605a-251c-44af-a3eb-5fb1743efcd6_1200x1200.jpg?v=1625248573', 'African Women Fashion Canvas Set Wall Art is sure to elevate your decor. Bring fascinating beauty of Africa into your home and make your walls unique and eye-catching.', 'Paintings', 17, 4.2),
('Moroccan Ceramic Tile Multi Panel Canvas Wall Art', 139.95, 13, 'https://cdn.shopify.com/s/files/1/1568/8443/products/Moroccan_Ceramic_Tile_Multi_Panel_Canvas_Wall_Art_LR3_1200x1200.jpg?v=1603885130', 'Moroccan Ceramic Tile Multi Panel Canvas Wall Art carefully handcrafted to bring unique style into your home. Change the entire feel of any space and make an interesting statement with this abstract canvas print.', 'Paintings', 7, 4.2),
('Modern Glamour Burnett Statue', 104.55, 3, 'https://image.s5a.com/is/image/TheBay/772349760975_main?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0', 'From the Modern Glamour Collection. Unearth the elegance of this decorative geode statue that brings major bling with geological glamour. The multi-faceted rock statue rests between the brackets of an iron stand as a mystical addition to modern tabletops and shelves.', 'Decorations', 27, 4.7),
('Forged Metal Sculpture', 329.95, 2, 'https://www.potterybarn.ca/site/PB/Product%20Images/forged-metal-sculpture-hero-z.jpg?resizeid=88&resizeh=1920&resizew=1920', 'This sculpture has a delicacy that belies its iron construction. The overlapping squares create intriguing shadows on the wall.', 'Decorations', 2, 4.2),
('Brass & Glass Globe Centrepiece', 29.95, 73, 'https://www.westelm.ca/site/WE/Product%20Images/brass-glass-globe-centerpiece-d4533-hero-z.jpg?resizeid=72&resizeh=1920&resizew=1920', 'Echoing the organic shape of a tree branch, our Brass + Glass Centrepiece balances bubbled glass globes atop a delicate, brass-finished base. It spans just under three feet, for a statement-making way to display candles or succulents as a terrarium. 34"w x 10"d x 6.5"h.', 'Decorations', 52, 3.2);

INSERT INTO reviews (product_id, username, comment, rating)
VALUES (2, 'Harry Potter', 'Great Painting', 4),
       (1, 'Hermione Granger', 'Superb wall painting', 4.5),
       (22, 'Rachel Greene','I am totally in love with this piece of art', 4.5),
       (1, 'Ronald Weasley','Looks great', 4.2),
       (3, 'Mike Ross','Not so good..It doesnot look great as in the picture', 2), (3, 'Harvey Spector','It is good but not worth the price', 3.2),
       (5, 'Donna Cooper','Too small in size', 3.4),
       (2, 'Jon Snow','Material seems not so good', 2.1),
       (2, 'Robb Stark','Nice work', 4), 
       (22, 'Arya Stark', 'Loved the doormat', 4.9),
       (2, 'Michael Scott','Watching this painting soothes my mind..Just love it', 4.6),
       (3, 'Raj Sharma','Good product', 2.3), 
       (5, 'John Doe','Super great piece for my house', 4.2),
       (4, 'Jamie Lannister', 'Perfect doormat', 4.7),
       (6, 'John Doe','Cute painting', 4.2),
       (6, 'Arya Stark','Great piece for my house', 4.6),
       (7, 'Jane Doe','Super great piece', 4.5),
       (7, 'Harry Potter','Loved the writing', 3.8),
       (22, 'Cersei Lannister','Looks superb in my hall', 4.3),
       (22, 'Scottie','Gives a nice look', 3.2),
       (9, 'Michael Ross','Super aurora painting', 4.0),
       (10, 'David Greene','Very nice art work', 3.9),
       (11, 'Tom Hanks','Gives a great look to my hall', 4.2),
       (12, 'Lily Stevenson','Super piece of decor', 4.5);
       

INSERT INTO carts (id, product_id, number_of_items, order_placed)
VALUES ('eb849fb1-3e23-4bfa-877a-8d9bb466e160', 28, 1, true),
('eb849fb1-3e23-4bfa-877a-8d9bb466e160', 28, 3, true),
('688f19c7-f7ad-4d3d-bbf7-713cf1bd3bc7', 28, 5, true),
('688f19c7-f7ad-4d3d-bbf7-713cf1bd3bc7', 28, 10, true),
('bac6f6a0-5229-11ec-bf63-0242ac130002', 28, 4, true),
('f44da428-5229-11ec-bf63-0242ac130002', 28, 2, true),
('fe6b1152-5229-11ec-bf63-0242ac130002', 28, 4, true),
('06f1e472-522a-11ec-bf63-0242ac130002', 28, 2, true),
('128f376c-522a-11ec-bf63-0242ac130002', 28, 5, true),
('197bd24c-522a-11ec-bf63-0242ac130002', 28, 3, true),
('2182ae52-522a-11ec-bf63-0242ac130002', 28, 1, true),
('2ab3477a-522a-11ec-bf63-0242ac130002', 28, 3, true),
('33b44874-522a-11ec-bf63-0242ac130002', 28, 2, true),
('3b3be9c6-522a-11ec-bf63-0242ac130002', 28, 2, true);


