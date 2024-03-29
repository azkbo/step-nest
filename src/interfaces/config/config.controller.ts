/**
 * Create By: Meng
 * Create Date: 2022-04
 * Desc:
 */
import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import AppResult from "src/modules/AppResult";
import { AuthGuard } from "src/modules/guards/auth_guard";
import { ConfigService } from "./config.service";

@Controller("config")
// @UseGuards(AuthGuard)
export class ConfigController {
  constructor(private readonly appService: ConfigService) {}

  // 活动列表
  @Get("banners")
  queryBanners(): Promise<AppResult> {
    return this.appService.queryBanners();
  }

  // 活动列表
  @Get("tabs")
  queryTabs(): Promise<AppResult> {
    return this.appService.queryTabs();
  }

  // 添加banner/轮播图
  @Post("create_banner")
  createBanner(): Promise<AppResult> {
    return this.appService.createBanner();
  }

  // 添加tab
  @Post("create_tab")
  createTab(): Promise<AppResult> {
    return this.appService.createTab();
  }

  // 添加banner/轮播图
  @Post("delete_banner")
  deleteBanner(): Promise<AppResult> {
    return this.appService.deleteBanner();
  }

  // 添加tab
  @Post("delete_tab")
  deleteTab(): Promise<AppResult> {
    return this.appService.deleteTab();
  }
}
