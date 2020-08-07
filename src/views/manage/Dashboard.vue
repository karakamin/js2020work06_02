<template>
    <div>
        <h2>Dashboard</h2>
        <div class="nav">
            <router-link to="/manage/">後台首頁</router-link> |
            <router-link to="/manage/productlist">產品列表</router-link> |
            <router-link to="/manage/coupons">優惠券列表</router-link> |
            <router-link to="/">回到前台</router-link>
        </div>
        <router-view/>
    </div>
</template>
