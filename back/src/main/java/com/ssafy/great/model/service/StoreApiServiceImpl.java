package com.ssafy.great.model.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.StringTokenizer;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.great.dto.Menu;
import com.ssafy.great.dto.Store;
import com.ssafy.great.model.dao.StoreDao;

@Service
public class StoreApiServiceImpl {
	@Autowired
	private StoreDao storeDao;
	@Autowired
	CrawlingServiceImpl crawlingService;

	public void parsingData(ArrayList<LinkedHashMap<String, Object>> lists, int type) {
		List<Store> stores = new ArrayList<Store>();
		double d;
		for (LinkedHashMap<String, Object> list : lists) {
			List<Menu> li = new ArrayList<Menu>();
			if (list.get("menuInfo") != null) {
				StringTokenizer st = new StringTokenizer(((String) list.get("menuInfo")), "|");
				while (st.hasMoreTokens()) {
					String[] s = st.nextToken().split(" ");
					StringBuilder sb = new StringBuilder();
					for (int i = 0; i < s.length - 1; i++) {
						sb.append(s[i] + " ");
					}
					System.out.println(sb.toString() + ": " + s[s.length - 1]);
					li.add(new Menu(123123, 0, sb.toString(), s[s.length - 1]));
				}
			} 
			
			int ranNum = (int) (Math.random() * 50);
			d = (double) ranNum / 10;
			Store s = new Store(123123, Integer.parseInt((String) list.get("id")), (String) list.get("name"),
					(String) list.get("bizhourInfo"), Double.parseDouble((String) list.get("x")),
					Double.parseDouble((String) list.get("y")), (String) list.get("roadAddress"), (double) d,
					(String) list.get("tel"), type, "", (String) list.get("thumUrl"), li);
			stores.add(s);
		}
		crawlingService.crawlStoreData(stores);
	}

	// Database에 크롤링한 식당 상세 정보 삽입
	public void insertData(List<Store> stores) {
		for (Store store : stores) {
			storeDao.insert(store);
		}
	}
}