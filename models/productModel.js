const { DataTypes, Op } = require("sequelize");
const { sequelize } = require("../config/database");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const seedProducts = async () => {
  const products = [
    {
      name: "유 헤이리 네이쳐 바이오워싱 린넨셔츠",
      category: "new top",
      price: "42,900",
      description:
        "셔츠 전문공장에서 제작한 셔츠라\n받으시면 느끼실만큼 고퀄리티의\n셔츠 저희 메인유에서 적극 추천드리고싶네요^^",
      imageUrl: "/img/category_new_img.png",
    },
    {
      name: "유 셀린 하이웨스턴 시어서커 체크 반팔 셔츠",
      category: "best top",
      price: "35,000",
      description:
        "시어서커 소재에 린넨 엠보 가공으로\n돋보이는 쿠션감과 시원한 촉감이 매력적인 셔츠입니다\n S/S시즌 라이트한 착용감을 선사하는\n유니섹스 체크 반팔셔츠 이며",
      imageUrl: "/img/category_best_img.png",
    },
    {
      name: "유 투투 콜드 케이블 꽈베기라운드니트",
      category: "best top",
      price: "24,900",
      description:
        "시어서커 소재에 린넨 엠보 가공으로\n돋보이는 쿠션감과 시원한 촉감이 매력적인 셔츠입니다\n S/S시즌 라이트한 착용감을 선사하는\n유니섹스 체크 반팔셔츠 이며",
      imageUrl: "/img/top3.png",
    },
    {
      name: "유 요요 스카시 라운드 니트",
      category: "sale top",
      price: "44,000",
      description:
        "시어서커 소재에 린넨 엠보 가공으로\n돋보이는 쿠션감과 시원한 촉감이 매력적인 셔츠입니다\n S/S시즌 라이트한 착용감을 선사하는\n유니섹스 체크 반팔셔츠 이며",
      imageUrl: "/img/top1.png",
    },
    {
      name: "유 리리 패리스 라운드 반팔티셔츠",
      category: "new top",
      price: "34,000",
      description:
        "시어서커 소재에 린넨 엠보 가공으로\n돋보이는 쿠션감과 시원한 촉감이 매력적인 셔츠입니다\n S/S시즌 라이트한 착용감을 선사하는\n유니섹스 체크 반팔셔츠 이며",
      imageUrl: "/img/top2.png",
    },
    {
      name: "유 웰 시스루 비치웨어 가디건",
      category: "sale outer",
      price: "51,000",
      description:
        "여름철까지 쭉 착용할수있는 아크릴소재로 제작\n여름철 휴가철 한개정도는 소장 필요성이 있는 가디건으로\n저희 메인유에서 자신있게 추천드립니다^^",
      imageUrl: "/img/category_sale_img.png",
    },
    {
      name: "유 자브 후드 더플 와이드 울 롱코트",
      category: "best outer",
      price: "136,000",
      description:
        "사이즈는 프리이지만 롱하고 오버한 실루엣이 아주매력적인 코트입니다\n겨울철 데일리하게 착용하기 좋은 더플후드코트",
      imageUrl: "/img/outer3.png",
    },
    {
      name: "유 그레프 투포켓 후드 바람막이",
      category: "new outer",
      price: "34,900",
      description:
        "여유로운 오버핏 제품으로 남녀 공용으로 착용이 가능하며\n후드/밑단 스트링으로 다양한 스타일링으로\n체형에 구애없이 착용하기 좋았어요!",
      imageUrl: "/img/outer2.png",
    },
    {
      name: "유 에스닉 자가드 니트 반팔가디건",
      category: "sale outer",
      price: "42,100",
      description:
        "여름철까지 쭉 착용할수있는 아크릴소재로 제작\n여름철 휴가철 한개정도는 소장 필요성이 있는 가디건으로\n저희 메인유에서 자신있게 추천드립니다^^",
      imageUrl: "/img/outer1.png",
    },
    {
      name: "미니 이중지 기획 특가 하프 트레이닝 팬츠",
      category: "new bottom",
      price: "29,900",
      description:
        "부담없이 착용이 가능한만큼 핏의 만족도가 굉장했던 팬츠입니다\n슬림이나 쇼츠류를 즐기는 분들이라해도\n부담없이 입을정도로 호불호없는\n기획특가 팬츠 저희 메인유에서 적극추천드립니다^^",
      imageUrl: "/img/bottom6.png",
    },
    {
      name: "유 인투 기획 나일론 팬츠",
      category: "bottom new",
      price: "19,900",
      description:
        "부담없이 착용이 가능한만큼 핏의 만족도가 굉장했던 팬츠입니다\n슬림이나 쇼츠류를 즐기는 분들이라해도\n부담없이 입을정도로 호불호없는\n기획특가 팬츠 저희 메인유에서 적극추천드립니다^^",
      imageUrl: "/img/bottom1.png",
    },
    {
      name: "유 웨더 테이퍼드 와이드 데미지 패츠",
      category: "bottom best",
      price: "49,900",
      description:
        "부담없이 착용이 가능한만큼 핏의 만족도가 굉장했던 팬츠입니다\n슬림이나 쇼츠류를 즐기는 분들이라해도\n부담없이 입을정도로 호불호없는\n기획특가 팬츠 저희 메인유에서 적극추천드립니다^^",
      imageUrl: "/img/bottom2.png",
    },
    {
      name: "유 MADE 4계절 투턱 와이드 슬랙스",
      category: "bottom best",
      price: "36,000",
      description:
        "부담없이 착용이 가능한만큼 핏의 만족도가 굉장했던 팬츠입니다\n슬림이나 쇼츠류를 즐기는 분들이라해도\n부담없이 입을정도로 호불호없는\n기획특가 팬츠 저희 메인유에서 적극추천드립니다^^",
      imageUrl: "/img/bottom3.png",
    },
    {
      name: "유 헤이프 코튼 투턱 반밴딩 팬츠",
      category: "bottom new",
      price: "54,900",
      description:
        "부담없이 착용이 가능한만큼 핏의 만족도가 굉장했던 팬츠입니다\n슬림이나 쇼츠류를 즐기는 분들이라해도\n부담없이 입을정도로 호불호없는\n기획특가 팬츠 저희 메인유에서 적극추천드립니다^^",
      imageUrl: "/img/bottom4.png",
    },
    {
      name: "유 라버 다크워싱 데님팬츠",
      category: "bottom sale best",
      price: "54,500",
      description:
        "부담없이 착용이 가능한만큼 핏의 만족도가 굉장했던 팬츠입니다\n슬림이나 쇼츠류를 즐기는 분들이라해도\n부담없이 입을정도로 호불호없는\n기획특가 팬츠 저희 메인유에서 적극추천드립니다^^",
      imageUrl: "/img/bottom5.png",
    },
    {
      name: "펀칭 캐주얼 러버 샌들 슬리퍼 클로그",
      category: "Shoes/Acc new",
      price: "18,000",
      description:
        "여름철까지 쭉 착용할수있는 아크릴소재로 제작\n여름철 휴가철 한개정도는 소장 필요성이 있는 가디건으로\n저희 메인유에서 자신있게 추천드립니다^^",
      imageUrl: "/img/shoes1.png",
    },
    {
      name: "배색 투라인 캐주얼 통굽 로우 스니커즈",
      category: "Shoes/Acc best",
      price: "30,800",
      description:
        "여름철까지 쭉 착용할수있는 아크릴소재로 제작\n여름철 휴가철 한개정도는 소장 필요성이 있는 가디건으로\n저희 메인유에서 자신있게 추천드립니다^^",
      imageUrl: "/img/shoes2.png",
    },
    {
      name: "에머 배색 키높이 운동화 로우 슈즈",
      category: "Shoes/Acc",
      price: "35,600",
      description:
        "여름철까지 쭉 착용할수있는 아크릴소재로 제작\n여름철 휴가철 한개정도는 소장 필요성이 있는 가디건으로\n저희 메인유에서 자신있게 추천드립니다^^",
      imageUrl: "/img/shoes3.png",
    },
    {
      name: "퓨처 자수 레터링 모자 데님 캡",
      category: "Shoes/Acc",
      price: "15,800",
      description:
        "여름철까지 쭉 착용할수있는 아크릴소재로 제작\n여름철 휴가철 한개정도는 소장 필요성이 있는 가디건으로\n저희 메인유에서 자신있게 추천드립니다^^",
      imageUrl: "/img/acc3.png",
    },
    {
      name: "남녀공용 더블 크로스 실버 목걸이",
      category: "Shoes/Acc",
      price: "12,000",
      description:
        "여름철까지 쭉 착용할수있는 아크릴소재로 제작\n여름철 휴가철 한개정도는 소장 필요성이 있는 가디건으로\n저희 메인유에서 자신있게 추천드립니다^^",
      imageUrl: "/img/acc1.png",
    },
    {
      name: "남녀공용 캐주얼 체크 목도리 머플러",
      category: "Shoes/Acc",
      price: "16,000",
      description:
        "여름철까지 쭉 착용할수있는 아크릴소재로 제작\n여름철 휴가철 한개정도는 소장 필요성이 있는 가디건으로\n저희 메인유에서 자신있게 추천드립니다^^",
      imageUrl: "/img/acc2.png",
    },
    {
      name: "남녀공용 레터링 캐주얼 레더 크로스백",
      category: "Shoes/Acc",
      price: "31,000",
      description:
        "여름철까지 쭉 착용할수있는 아크릴소재로 제작\n여름철 휴가철 한개정도는 소장 필요성이 있는 가디건으로\n저희 메인유에서 자신있게 추천드립니다^^",
      imageUrl: "/img/acc4.png",
    },
  ];

  await Product.bulkCreate(products);
  console.log("Initial products added");
};

sequelize
  .sync({ force: true }) // `force: true`는 기존 테이블을 삭제하고 새로 생성. 실제 배포에서는 `force: false`로 설정.
  .then(async () => {
    console.log("Product table created");
    await seedProducts();
  })
  .catch((error) => {
    console.error("Unable to create table:", error);
  });

const findProductByCategory = async (category) => {
  try {
    const products = await Product.findAll({
      where: {
        category: {
          [Op.like]: `%${category}%`,
        },
      },
    });
    return products;
  } catch (error) {
    console.error("Error finding products:", error);
    throw new Error("Error finding user: " + error.message);
  }
};

const findProductById = async (id) => {
  try {
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });
    return product;
  } catch (error) {
    console.error("Error finding products:", error);
    throw new Error("Error finding user: " + error.message);
  }
};

const findProductBysearchKeyword = async (keyword) => {
  try {
    const product = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${keyword}%`,
        },
      },
    });
    return product;
  } catch (error) {
    console.error("Error finding products:", error);
    throw new Error("Error finding user: " + error.message);
  }
};

module.exports = { Product, findProductByCategory, findProductById, findProductBysearchKeyword };
