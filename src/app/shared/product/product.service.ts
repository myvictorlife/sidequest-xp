/*
 * File: product.service.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 5:18:12 pm
 * Last Modified: Tuesday, 3rd May 2022 8:06:52 pm
 * Copyright © 2022 Sidequest XP
 */


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { externalToolsUtils } from "@sidequest-xp-core/utils/external-tools";
import { ProductResponse } from "./product-response.models";

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {}

    fetchAllProducts() {
        const url = externalToolsUtils.getProductsUrl();
        return this.http.get<ProductResponse>(url).pipe(
            map(response => {
                return response.data.products;
            })
        );
    }
}