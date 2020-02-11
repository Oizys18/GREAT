show databases;
create database great;

use great;



CREATE TABLE `user` (
  `id` int NOT NULL auto_increment,
  `email` varchar(30),
  `password` varchar(20) ,
  `sns_token` varchar(100),
  `birth` date NOT NULL,
  `gender` enum("M","F") not null,
  `name` varchar(10) not null,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `category`(
	`id` int primary key auto_increment,
	`name` varchar(30) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `store` (
  `id` int NOT NULL auto_increment,
  `store_id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `open_time` varchar(500) ,
  `map_x` double NOT NULL,
  `map_y` double not null,
  `location` point not null,
  `location_name` varchar(50) not null,
  `rating` double not null,
  `category` int not null,
  `phone` varchar(15) not null,
  `tag` varchar(100) ,
  `image` varchar(500) ,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
alter table store add constraint uni_store_id unique(`store_id`);
alter table store add constraint fk_category_id
	foreign key(category) references category(id);

CREATE SPATIAL INDEX geo ON store (location);

CREATE TABLE `menu` (
  `id` int NOT NULL auto_increment,
  `store` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


alter table menu add constraint fk_store_id
	foreign key(store) references store(id);
    
    
    
    
CREATE TABLE `review` (
  `id` int NOT NULL auto_increment,
  `store` int NOT NULL,
  `writer` int ,
  `contents` text ,
  `date` date NOT NULL,
  `image` varchar(100) ,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;   

alter table review add constraint fk_review_store_id
	foreign key(store) references store(id); 
    
alter table review add constraint fk_review_user_id foreign key(writer) references user(id);    


 CREATE TABLE `bookmark` (
  `id` int NOT NULL auto_increment,
  `user` int NOT NULL,
  `name` varchar(20) NOT NULL,
  `type` enum("S","G") NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;     

alter table bookmark add constraint fk_bookmark_user_id
	foreign key(user) references user(id);  
    
    
CREATE TABLE `bookmarkstore` (
  `id` int NOT NULL auto_increment,
  `bookmark` int NOT NULL,
  `store` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;     

alter table bookmarkstore add constraint fk_bookmarkstore_bookmark_id
	foreign key(bookmark) references bookmark(id);  
    
alter table bookmarkstore add constraint fk_bookmarkstore_store_id
	foreign key(store) references store(id);  
    
    
insert into category(name) values("한식");
insert into category(name) values("일식");
insert into category(name) values("중식");
insert into category(name) values("아시아음식");
insert into category(name) values("뷔페");
insert into category(name) values("분식");
insert into category(name) values("카페");
insert into category(name) values("기타");
    
    