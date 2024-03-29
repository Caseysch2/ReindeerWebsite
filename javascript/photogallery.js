document.getElementById('photo-gallery-container').innerHTML = "Loading pictures...";

window.onload = function () {
	// The list of photos, grouped by section (all fields are mandatory)
	photos = [
		{
			"name": "Building the First Barn 2016-2017",
			"photos": [
				{
					"picture": "https://lh3.googleusercontent.com/AIm3oYjhxEfFk8s3kA_hFvfzWJW4Q9RLl6u4X-QvcSBtqQ4Aa7E068dhaJ1MBHaUbMhjudVymQfrH-TWZu9Lax_WFogRkWTa4bw8N7nzW0UCjMAEaCnUEt-lBQCmYJS1Bm_dHiUM5ztOFzbze5Zdoj1Y7uSiSMteBl4IzrsjPMWxxz3bLeE9stSTHijw5afE56DGZ8bjaK_WyD4so7tsQ9HzkdeUpO9t4xxkmXFsKfS_QA03S_u09AaV6OIHAp28m9RwflvLbSbjtERzST5bxiL3b-A6EYomWnAJWHNL3S37tCjq3b8KR54OaRwKkcI444P456Kj37tFmSV0RqQFOTQmXdx_pggbvKVDIGua8AIx78OL_85FO4ryqH3eqBPgt3s-3UWa4xSzHqrZeNF8nGbxWdBFPJzvDBWPUCYvmcpMXHRzf8hr1KglBgmlwtdB5gRDI18fy5py_ddQnP6ucdYjxREz7m3hu3yqzWy22zcA45Kapsr3rGQraIPLZuM6pNAYFGFPRe_RfW3QAMKnvMBOuOvu0Fd3402Xw_E7UgnCbRfUZaSnUb7xP6GLzLyNch50ZqlnM2rSwvi4RRExFVFLhxTBzWL00EpUDrLL9cwB8ziCReBx0vougDSdaTq2BP673EBrx2z8XOurGkE_jb2AFenk5x_rMmikdGoT3VPaOIqNosOqY8pKmFOPSUu42NPB0IFRVm2VxDu7JNSNr45xjdWg1n1UigATFit39pJwAzMg=w1250-h937-no",
					"desc": "Mike leaning against a locust wood post.",
					"caption": "First corner done! 8' fence to keep the whitetail out. Learned that locust is really heavy.",
				},
				{
					"picture": "https://lh3.googleusercontent.com/REcXpl887dBekdjFVM-4mtJXyuT-Y_cXejgk8u5OQ7ibPSs5Pwg3Qn1q6y9tpo4VdPRqEAUpBe0TGLU_KOLLZvQTgIUccRD2CiWEySVBtIKu20PMcln8m_kvHfSYUs8CmVP2W-zKB_Ytf4E7GiEGgu3uuodqmEIqPKjSbbRdcnpKya5rbThhSQu0SFu2I8yigE1KDCRVWv0jqFkn0D-b4MTq7vVN1hC6JKA-fNJAb5H1PHVLAM7HNdRkaBlE1_bU7BkhTTqs5vVkQKcRt_5Av88ClpA7PVeOULFtIGOKuOoCBxs6Hza6BkryRZxcOdvKk01mjTeSZYJYmBCdwonDt5uskxVuNmrEJ2q9o9YpbEk-XWd60scNk0f6rV9v8xhdbaLicymmkbEZrfCEyhzFXkc3TrRPvEkbUj6LmLZGX8We0r2ZSeWVF4xODb64YSvnnh1ebraLy-ylBfmTjJN01N5m9ejLld98uZe-0OdZeZwiAjHhIvMpCNq3XZAUk1rhRxeZKdf7dBC1hnqqaPUEiFbHWxk0HGjY9Cj3rU0HU0ZjyWdxVtx5ZZv3wHm_B2B0lJKbzsSmmJnf_FvAGgTeyzeQP8Z2LNyAQmkSUqGJH1cp-G76XIzrkmerosZ5y7sLzpZuYehDxCJKex1CTRM8_QnjAork3wz7VVYx5Y6LhrGLeF9Q4LlAiL0F5IHO9xlSmoolVxwkbx_VLgeyr2ENybf5UMdoUpaGUFjU9xkeg1RADck4=s937-no",
					"desc": "A tall post with eight shorter posts surrounding it.",
					"caption": "Laying out the vertices of the octogon. Center pole was a bear. 22ft cherry.",
				},
				{
					"picture": "https://lh3.googleusercontent.com/KRP2NSDhVMEjB2N586YcqxLUag-AQAeedRfy_0Om_XXeKjiyDaLb9HBJi0tXglVvfyrcljEta3gCoVU4-bC-DHic_2qjIbDpRCUiqb4qEQPASJlIEZO3zdljnq9NY_rh2NU1QgejtVwFYNhh4B3VpADd0ny18_CbdCqEjh5drj1j7s4MUeS4u4eQjmWgu-4wawg1UcDoBYdLeBvGJmeRodyZbdNGR86j0h8jiPSCF5b1PRY3zkJ21jB26nnbFGwVLsASut9De0G70LiOigIpR6fsE2HKsJu7hOJvDC7SmpSMjcr-DAUXiyzI6iRKzi4UJXm53NHDdC6wRs2ZjtYs_bVwt8PpjaoHoI9ruqpQtNnxmNTSACwgIz3zUZmIOYXC1paGGFhG4RxFp68Uw63ERW3kjMBk56iO7GDxklklkMciRdmHwbIs6SBhqgoz1ngU_AzD0fxow5lwzz4JYg8_9mtLaWr16n8bwTQSEIgpbxR6EkQov2U5BncwD0pIlnRHSXEC0vbcSUk7On7DdMvltrfXy_jAWWuckZF8DW-Fo765g3YQJtdeJRYpb5yJImiN27w2KDREyzKhZkOZ3hF-ybDhAmn9qFg1qPGMJ7Zq1CrUG9Ir26XJmYnZ-FDyhe8X3CDckS1rrc1XKfTNlAYIkFNvmyijx8z4_m3Pt7U6-GfR735p0creCRK81xJtSKLj4V7OhNi9-CUlTP3ddbBg9aYNC6Nwoxe4LLp_dbDFYXohVJjD=w1250-h937-no",
					"desc": "A tall post with eight shorter posts surrounding it, a stack of pallets on the ground nearby.",
					"caption": "Top plates almost done, pallets for scaffolding.",
				},
				{
					"picture": "https://lh3.googleusercontent.com/zp3mYxIOkaeE1Qjd9bwCeI13lYNzgCxY3U3ZuvTjmIsDlRYU6sjVOML04Dy_NnIJuM250zNhhS0UqMMH0TfoVp342TUQAex_TUPzzZMMUFUVrCUzJ9R9z-hZ5Dc7ADwRBWQekrQqN1nVNHhHjhrEbZhasMuXOgrPlIleUZq7QIfLHmtlhBeSWbjz_sDjm514IaMX6-xh485ReHznD2g7hgzZYvGylciBN89f6mS_vQEo8DrE4zegN2t-qF5ANXk3vwByYgqBA8vEaV3hkPrrOZ3E_kF34SeE6CKqd5TL7T4CEfzg6LBEIP6VX-l26Hu4FZiWRTyfPI09IQBXy-1qllfWh6Fb5YDPxBL9rmY3aGBZHVMPa3lUikDitYp8N-LkQb5E3dYwihOdEJ7w5QvgmM5s9IRYVJ2VpN-NFhPeSV-74CSMiOhDiSxQk8Xw6BOZ4xyTAjDJ8EADVVYDokLeKEn9gmbEQs9L_ugTqr5x9ecV8pODyRMr7mmlXNjVdb9_FBgAXhMuIFPl-H_tw7Df6l3NwYK3kERwRahuuccp7qk1FXwZdsXkckFOqOPq88a8cnjFy6xxnZffMuCTJO8ULMHi0AZj8JR6fQDrZTiXde5uOAxobCe5-UGwLtI33zfTxMvcjJ1t0AtNgbTSJrCZbIm5ujwiJ_c741AF9Lx1bmpsXLCFmFu-KvIZEJulan8okPJyQKrqZ4ocp1Q2AVjwz8TddrvFePF7cvMJRprruyYcJ3mt=w1250-h937-no",
					"desc": "A tall post with eight shorter posts surrounding it. One of the shorter posts is connected to the middle post with a sloping rafter.",
					"caption": "First rafter up, perimeter fence in the foreground is done.",
				},
				{
					"picture": "https://lh3.googleusercontent.com/egWRJl1NMcgUMs2vZ86vPzyB9QAX1IihX5NruLVjMKbDW5Yjn_auiFN1dftTVSyKl1zY0kaQoCx9RedDGerIrRzRgGkE4BloL0JMINF2K4s66bEayHW1NiE7ZowOHdQedrua__i2UkZns75wZ0qWUwodLgRqOGcYPEMrrmY-iPodem73G6zut8cV6t6ym-uUrThqFMVHck8Vaj-H_ypZitnzX1pM3jyz4nbquSKycoAVrGeWuRuKdniP9ktt3SK69vub-clhwSYNkf8lVQIWQrI_IDGj9e4lFULReHN8E8GiZ_UMALuLhpZhvydDwUomy9tjkcilE15P302gTP_7KFO4bWPrmONGUWCOWxtv6IloXIFtOx2NYnseiZB1m1rRifB3BUuFJXdUeEweuTFZ4mcWeRKE1N94bzlq6fqIDRH-40GylTlhKDwzkXI2MQbqakpL5rV3ILXqN_lu7mLeB_MkLSTVdKs-BRjShWgTnC8pU8HJy51q53TwTIVi5ryXeJGHjksB6N4pVGRcMabo27wAdr1nMV7dPyxP4PwMyEqKYO2ixs8q3aAujentC-aAOVF4OhPeBr6B8kSTPMRn0neLhnveLK_yxnhgRgI5Nd6ux919Pj8k5e5IYhLOn4HhmsVzgjC9KQXemGnEVVG-OdAzyzn13wfTnSCkUSWNfLjaUqqDwGiQJMGkW7x_mnbRucJeelrjO_aA8F242-dgJj4N4nYoRtnXQJFjtlSc50TLl9AN=w1193-h676-no",
					"desc": "A man attempting to maneuver a heavy post that has one end mired in mud.",
					"caption": "Kind of muddy at times",
				},
				{
					"picture": "https://lh3.googleusercontent.com/cQuc1MeITNClHu5YEbu6wAlgnvkTrbG8LGog9AOjYdIxcHNfI3Trk3irG3OZ-W9rDCFCe52PCjOUPaO9xjN6LvsGYf3M0x0Hu29S4flODRLsbraPRvgh3E_NtWLiImwOFcWOsE9dK3VnwkLAGrlKFIY78kPCRKgtchQ8K3JQiL__rTcdTL0m5tk5CHOFkAF8r1iCGYIpZDNTYxZIpm9kSceBvdchYVSKrwW1LuqHw42BjtbkbNK5ZNjiA-I6ocODmWedmIHUwUDt-Hcc09A0yJfIfh505K8dpplnxutF4Pbuk9vOqvb9wbb-qjMj_oFlqAy8_QxybqiYogmA8SgSYq1j3XgMkCUJcAjU6PHD6VBuwjb6VF4G_6nOO0aNVGZvK2ZALWqrHvhFftXjJ_vSljXYfECNf5XUwYEIgT9YqbBz85TkY2eQw2ZMXVsfKP_XBDqHgkZFDk5NMQ741WMf_xri2nA9C1qZVAzRt0TEuK643UdWR5qlZVUyrrEkXfFO55g_M0J94uPBNnb9WgpPH_Rf87NemkmCl6q8OmhdO_r0ovWtWXauy4A3ffwQ4_r-fO7W7FjOaeepX2YRq5XI-vVXND4AwWc-4xV6dcUrN4H7FqatZsPyAYBNpnnOVEEJ15uZnV4wzQtX1KierYUZ7xe99YI7HChdQoZlz3GNn4crlvj5Pk65dYyFo1-1a9v3_V6zBq_GhTWYY_S6f2EUXq8k6zRWzuAu4X7QZvIIkNoYoNd6=w1250-h937-no",
					"desc": "A tall post with eight shorter posts surrounding it. All the shorter posts are connected to the middle post with sloping rafters.",
					"caption": "The frame is done",
				},
				{
					"picture": "https://lh3.googleusercontent.com/aU6nAYBmyjraazdiMdwrKFddDPC1PIDlSfNs0aa553phyLHemQT0QTm4nL4mL96nBATPpSSnoZ0NajorRzMBYzayTWUf5onmI6GErhvdhBIWW6UECOri0Ta0Nq78F_n9UkHGsFvmL_IW9XCjgGXJghmU-6Xp8RqW0CXDj1gXEeni9eh-EaQWRIKCNPed1wnH4tckgrPDR9twLAPIr1_QPCM5fB103CZlkT1BMD9mhXkfz_Trwz-ejF0Gk1hpVCT_ljSdbYgR5-dRzxVCz6wAops3MqY6IK4gN551JhKJlPz7uzYhW-tD50yGbz-YVUodU9Rd0RaT2eOyXxwIdBVpcsHTLfSk4fu-LLfjJwJgvVcc6E0beK83cxiWEYsev1Am9VtvrVQPMObgsVWGjnjwJvaW5nhOkz8yK3mMx1XCZuAuJVRyq9sBWO6GOnqT3Rk63sLwPYcSs9uZ34gnOu7UdfOZkwNC85mi8F_5bXBCH6mlbJDeH9waod5qOJUsYv0dxm9LhnBa691VrqwIENOyvXm028ZM5uscdsGTfjn_E_8LBhKRbc5mht9UtAkNeW1AN8Z6pO7rqxOHfv09tnnteHo4RlNqED5p9JHFAm_xUSutlHAPsOAQwrrvKLr5bdkhtcMzeCp3P_EyKjzxN1HoN-9NpMTBRZBb5TE0dPM7b8_rqeQ_OHFz8ExvoD-5MJv-Vr_VNT7CPe9eT17-bdQlNrSLsWAQmSKHq1P0nQziuCe2ecmr=w1250-h937-no",
					"desc": "The frame of an octagonal barn. The incomplete roof is made of eight sloping rafters. The incomplete sides are made of only a few boards of wood.",
					"caption": "Sides are next. The lumber from an Amish sawmill. The timbers are all from our property. Cherry, Oak, Maple",
				},
				{
					"picture": "https://lh3.googleusercontent.com/jojpffqulojqdDaHiqZrtS1_3MTbOXBH1IwNKZwIjexn9V-cnQdEj6DHudTMICoDSNrFdLDdXMQ8UKRGq_OJurzvXSdYUXxBE8SHQk8p0gzJH6dUlxBAYiKQbn9Op5-hqM86zgx01yLKFTj9iCfM5W9enA9_-72a8Figz8Ytv6hpD1QMHBzGa94ZVSoiyvdpTPpysGNy9dXii100fccseEzu6aBShpZv7UkE9iUKacUiFOGDQvdk9NdxTp_FLOfilA6NpigriuXL2GXa2X4rxh_ECQW6lO4FwaZt60cGDGPPuSTlCZiAxeWa5YMFHb00-oJUcHHbYJTxCrx2R6bRF5VdJGCDArsg5mCxpr2BUnN5n9zW32njBo8dtgY2S3ekrdDlFVm8DvGu2j8YN6y_X1sCgHv5z7bgD3NHjj4tnbhxpoh2pkH5WfFylsPJK1QnoDffyOFmnIeVyTot0fNrXRZnbpte7JyN3lZ10H45S3GdqqggpobkbOZLvmBCMimhZLfQluzfTmLdg9dCn31VWqrstl9kRjrPKjmKM-039UK_i3apH_CL5E5qvnV0Q3VSjA03YJ_QTJfoI2pIsYIzPt3-0-xxW7pnoGLyjsq51Qz_2eNLoqWmp_Vs7jUwCUMrGR8wBhaPcvR92ZtAkJXFRAeyw4ee0LTSEflreN2iVNY44WCyQHnZmgwWYK-Unm8WLL5ZPabJcQOl5UIiRkNeI1992wZnWtDh1YU7bgywoM_XD9Kn=w1250-h937-no",
					"desc": "The frame of an octagonal barn. The incomplete roof is made of eight sloping rafters. All of the visible walls are complete and made with vertical wooden boards.",
					"caption": "Starting to look like a barn, or a yurt.",
				},
				{
					"picture": "https://lh3.googleusercontent.com/gWnvY8HB2sLz1mn6rldtL6BporasZ6oPTmt0mJO70hJkuinbjBC5KFMxJlND3QBrjX8VKqIDTct7P5fKuc2b9rKJnFtVaVB7-yB49V83VxVMjKDxfwjNHOBNSWL-Fx9eMZjwPzYqSnKM-ZBcGPBI0G1ozh19oNmcj3z1TUKjZJLamOJVrU3tGSEmX_yRlgUDu955CmsMR8EeS0FCVI02-J_DxT2z6gYhvvJAnzOyZy4nF4MnV4TUY_FNBTJC6xKUZsLFL0otS1gZsTUkdLdt0-W50yy_pid8M19MShn65iWnnw8NJ2uP6dRpCdgR6pgXjotD9v7UAU1wrrUIEt2Hf3X2qV4MjNh2YiRcqjCe5JF9sRhOPS52qxINpS1We53KqyZDmQAa3nz0GJBO1lNyECWRiv-B3siYwTV4mQ5q5KAsFnoQcU-B6aKEdp9R2Bjff6t8rDLaxIy5uyKF_pxyjL_0hhue_v8BeikKo5ZHknOvAXetHDFroviLXRdyuDAH5fawyu74C7uTaGNvsp6RmWfUribh-4FPeUztUTcVioErEciQk1lhs6cn_PCXlWQhVQJ3gqE8Tr7HRqoisv7R2H6gBT4H6doLjSJCfUhikIy8vwqHQ2pDip-5Ym8r0WvtXqOPZltxRIxHN0xHdqUO30ZWOo7dg1j-nRXKTZo8cRNY67oGU9sAJUt_LwKxTAAYiCSjFQ8njyhniHz6YcebZ3FoEz5ZiQq6EIyK_R7eTvL0KydX=s937-no",
					"desc": "A picture of the barn with sides and roof nearly complete.",
					"caption": "Waiting for cedar shingles from Maine",
				},
				{
					"picture": "https://lh3.googleusercontent.com/svI8KSBCHRI6W3XXhjticJ1xd1akoVwtYTxfgO9PAvTPoaDznRTdqE7kwfYjBxiUYSa1AosAIXR7zM-jA8N7VGt1wig3YDYErZ4Uo1EVayFA5w653RF78kzYUWgxln57xREgnraifvTksFJKPIhTwfv5IvwEjrJ6J0aCKxok6_XWFBHaa3guvU1i0ZdnICiZjY-QbEGuljIaDGkwMEoGsKfwAx3RSMOwld4Y7hf26I4zOyESA5JbvzdC7CCQ4UaEF2n3TZhlbULYcsp_andkHd8bGtt61Dab2gIPeCBzu6qXt7weGZcSKah1l8xEupeiSV9Ta3ovxoeeJ6_7uOdmhyPIeah6o4acoxV81WjfHrV7FDR985G6o4MR2ztJJx1RJ4GMzy7zGDFT2EV-1TaLc1kqpS64WIa3K4AhpfKT7Re6NR0fMX7C6mj6eo-JyZrmbPOt_RdIPKrE0DkKGq2yLXpDlvuTALPB0VRHX3i5RUDDrMit_UoQDeLp1CUPcyqGoi2efTJ4Fe3TX0ggk5xQoSzJQ7dP3a2bOzV79PbOPBoyqsv-6O6dxqwDDLUfUzEEOa2XZMz-4-dv3aPe5ol9XQzbX67K0RFVhcuBtnaPWUenShMsAkEQUX9A_woa-3D1rOOgDNHu9IHD68pzdbE_ABcsqlGGSm1_CqMrMODurWTMX5tC5tCACdvuszJod3kq0itUc0-OB47xLphz3zo2QNV8oQcRge6M1Un2qCv8rBqKoD62=s937-no",
					"desc": "Two women on top of the barn, hammering shingles onto the roof.",
					"caption": "FINALLY some help with the project",
				},
				{
					"picture": "https://lh3.googleusercontent.com/hBpHMHP9LAzb1q1NWyxuga0H8BIfxEzW2pVljekYJO1o_O29uNyTF7Z6llHjFuHziBzSZyVw34GG2u74RYg27AM-O8VbggQxHnyLPNysSFUvrGr9OoO-lFirmGWo_cjDzKmb1iKa1P9Nte1Azs_wxdJwc3a1VBxlDlowtcIFr40a57rqR5HsUvTQAq_TBMTD_Gdrnbclzun7-GZJvurHmWT5LcehBggAj5JQG1vzcpxFs5PLoCeq2PBh8hzIOtPsn1odTO3-o43XQ2v_QfLjLPUhkkjOaG4-rMuUYBi0u0UGetz2vGSbcF3cqq_6XUJ1pmBMgxKS760zXNXHMlDbecgDQ9dxFCR5FK0UYKoQfd6-ZD8dPUPcTgcyOxjxdUoK-_6AgS7BTAA3W2GkcS_vzxeUFjtPnAwgvsMF1qwwBUNpm_0ZijZDprCTy9ShaR0sTUF1CDdUY0ZMSuyzSxUW79A1Rbd__ooGJrcqap3UOylzWJ1DXD7zQu4iW1do0r_0Z8Nz-XOA_MC0B2Ed6rzxfEvJcQEGYQ0dAPj2VXGLN0UbMmdR4AE_MtVt3NVfSOHD_GI7qaFOSZuWULLdzqmIkurQ7Z9zjmZvL4WSjZlXD47gKOci3krpC88xfFuQVVSY5aax6Wa6C96idwgcRmHjnAiiH8_6JudLD_GE6y8Xb7TZrYxpSQuuDAOrZkOxlxm5ytSvS4XruNuVb0HymsWh1QZP0ODvDGXJdbIIa4bhGzBrbZ8A=s937-no",
					"desc": "Two women on top of the barn arranging shingles on the roof.",
					"caption": "Lisa and Pam take charge of the roofing",
				},
				{
					"picture": "https://lh3.googleusercontent.com/c3vna6E8VQ1zKm-60CHQ_yd010xuBiFlAV-xmTFK4_9qH_BrNu-cZaTlZMFNiptjAID4GOVEMOFp0SC8dqi1SgYxSe1kEEA77OK3G3IUOi6x55UsDVaaIdSwmjBEIo9aVSRnxg-pp5SJCLNtsrJhLrJtlcg7sSKI25GQkFOoCNsly_czEiVB_FJqp6i1XCBJS7N_bzmeoYY-THRzBv6eWleXWTkdqKyR-3Wd7fHSfCz2hU35BUHFP8EDpaf0tejT13xc_fFcyWZ_JyEvsB3fTcbU1bO2C1LHpa3jjXHeBuMsuzhLphFwMNA38_YeeGeH9BxKh9iZIz5FauDbm0CQ7VrMquu_vxze8sP62Mzsj3MuyKtZAs1nqW8kz1bvUv9cqFFD31XrVKf6pElvxwRwQFl1iwsfDCFt-Kwi6cKptCowf4sYduXTrL_zg1x7OsNxMyqm1H51VM80Dpr_BktKxesPOMYOQ-fBsfiYnFobLs8zDo7xki9j0ZigGtOebIfIRXsZ_YWHg910HxtCb6SfBi-zopjoY3EMOdzVL65WRJoKm7fWSEYWyyIGO5c8cX89REbXyyMBz6tuKjZcMv-bWj9BOyDY_ky3qtoPLofe8Q_S74LBVLIF9DlcnvdeyzxXHZ4FLYCAGz5dlT-dc7ZLppL8QpSci5k05JnvgoHeYkFgPGEZ-JTP1wnt_B6dlILXLucRZC7RK_dn7GV9f_yd-OoJS68yimag3ZC8YRC7hxYqEAcg=s937-no",
					"desc": "A woman hammers shingles onto the roof as a man works at ground level nearby.",
					"caption": "Toby below and Pam on top. Would never have done this roof without them",
				},
				{
					"picture": "https://lh3.googleusercontent.com/qKrOf3Km0dH3G6yx63_ZMjb3NTpHo8ORNc_18AvKToaQvplh07Yr5JB04KLGB52IvvLDYIZ7VDhmvtAB74Wzz7U-3K5cew8aMyFwaZ7GfYPLo2-BLzD3s1c7spkyHgLCsEqT8DYP6_rri4XQpH5GPn42plR_F0Qje00u8TJLyIk3zP-lKKRV4QnixtQLG_WIjIP_3aTnjgz5NLpN0yB8w-AL2VvvsiQB0Fz-e_Wt1pCcRZaJrVJvWdnBoz2gsytj9Obyz2jZYA8eNJveP4nB8cOs4lYuiWZnH_5pw9rbk5khVCCnozrnp05rPdFAwjuSboPXTdZaJ3EmMlsvF_AvvNJ8Y3Uas-YTw_3H697CJkiERI1XpctXGQfYtSfpL3Y9UEhHZf3BHGgsu5us9F7GqS5JRMaiKr0qo6Ji4EoVcfneeFoDVaYQoTcVngltudOD1_fIcu6AEA0wdtyYgBFIFOTsmBzEeVWNqsgyw9ypzaZ1MlrLFpRsa6K1zsPldUJESGcAHJ7tsTK7C-WSGKjwycnCKUTUC5Y6k2cJF9nWWu4RcKnBGARNhC1daCkLFgzOoRiEgsJPVPsi4B91XsABmUdj4YqR_aCdVMn7IaroJ94qrUzE2mvoj9qTFIPoAca3IJN-Jc3EuGW8uHGPelRYJC-U43UNB0Hk7bsrJuZ5Bs81F2D4e9w6aVwIv2LDl26w_e2I-G2DilSqlzuc3PUo56LqA92xPkf8xURkvdxVpB8mdgMa=s937-no",
					"desc": "A man on top of the barn arranging shingles on the roof.",
					"caption": "Toby educated me on the finer points of installing a cedar shingle roof",
				},
				{
					"picture": "https://lh3.googleusercontent.com/0z8Gb82BANWi4NvGXyX41acy2TG3seNIALWpQvOVU6cxng1HF-ZNRKnHe-N_ZEsXPzWFRZuFvI-fvwKEz5SCt3zN3hUeziuqr9RoUYqfhihoirSv7k-igHG0E_GwUpbip1FY8v40HVvf_5mx7juK_InYwYyV7KUFi80bk8j-WsBWm_S0RcRDPFH_w9uilyjjhotutIl-XO7VfIaUrelLGzUgcHOgeUelxSrV6ZhiL5k3yudQw3C8zaKe1zyaTFUJqztpjOAvs80mZV9pnuRYcYPt3KnJQ60pFvcgSL2iyL45v6SY6HlbTb0ER15TuJv-PrG7N4cuHJMlcOpCnR_YbNkdTmUC5l_D3rGt9EThfpZ4b2baNAtQS9VQVWYpNQlmsSvPuFtW8CcKPJOIHK4sEP0dRQOMnNwMWEwo-GU1BFrrSHbOD-38VAiFAATr0Qxyb7CaGHtJGY1UhoUn4XL1OzTQ9VQcbokSgavf8ZAA58FjdXpSFa_zJMKGDWmUx4sYLIFaINekTJyvE0HS-7hQeQhG6NGvFeU3plsgM5xMt_3npoWhje61KofwPzmMiT8Uv99FwtOMnNiZunBqYeVJHEkr6rHNZJViZ9IOSObMartt3t1AJaWSEr3vJSgQRMzK3Rhz-gaN1iRM46GD2qFAzuygamKzyBFpV1SXgHhBr5xlUO8b7pUnfXBEya6jHbCYnQ7jy759b32oKxoo8nOy0swJdIZT1aAYhYEd-ceEaxmW83LV=s937-no",
					"desc": "The middle post of the barn as seen from inside. Half the roof is shingled.",
					"caption": "Looking up from inside",
				},
				{
					"picture": "https://lh3.googleusercontent.com/0vn0y6yocu6gLmTlREYL4qN-PkfKE18GeqksgNiEZmd2wAn8HUgjUzNTC39r3SDPdm9TNf5WzRUZABVR--W4dTm22GQ_yc5S3TuELRU2KxcNPhA9lc6M0VBoPiVbgKVrsJgiQBRgEV3Br24b2WFnefDpoYCrSXgJq91umFdcAWTLF-g8mkcxSO3k5t4Xtoro1cv953GMSiyuG68PJNyHmAJgnWj80M6tI7Tk44tZDWWEa2GebF2NNey7_6YVtdaLYcZmlG4XrDG62Wrm7zeES18XZcSScUblZerZNzupX7xlDeixEFVenY5lKEh6e-hXQe4jBKK_uLS1bfOiDEMHSx3v7imgQzG-JINfumoOQKCnUg8spQNIYkXoshs8uVmkxOYVVm0pHZRXi1QKKnCpgKPjSFW-0w2sIktwcPx0_L5X4kEO0flnti3EMsUk_VSubUWiXQtIX5Gfh32nDIphC6unLrmYPLWpGeZ_g1b3lpM2HT0RfW4CGA80iu5j2xez91kuu0wq4Ec1b2Y4N14wwYi4QvC1-5PN7Kf3BTurl34CSuM3k1Csx0twvpHQA7q2M5dj8dtEwxDUAFj3J4TpSr8KwX2u0Y7HO6Yodb_XrC_rUuCbUCe5uLSEy4MdKImS05DiIaoQajgXJzwbtbpuqBs_VeIreR1ri3YgA9C3s-s907mIoTTXPFixIX-co-ItrumDvxMXFk3k1__HizZYLThf_m-PSJ-EsjTGIjwzcmSQ6rNu=s937-no",
					"desc": "A partially-shingled barn with a few boxes still sitting on the roof.",
					"caption": "Just about done with the roof",
				},
			],
		},
		{
			"name": "First Year with Reindeer 2017-2018",
			"photos": [
				{
					"picture": "https://lh3.googleusercontent.com/Q5Qryv5i_lZrhUGefEfHQ51VD02DmvPdRy1Glf6Q6rgN766IxfVmH768315i9zw9CvV5AOjed1YhfxexmhDpwEAU4sZ_8DPItWb-PeJc1h6uLMsS1JqLWE9DG80la5Cz0LG2dU88MOX-Drul46z4G4sgbiN0xvkNcVa9cKVLE47Rr0EGdQKLxIm4Sluxw3nz6Mo2qWdaPlLKMX0zWzxrIMUT9AQd-evJj3r5xUZv1d_lWQiKxMxfLHn71vKeIK3zu7S-1pmWx-HvElmN4vRzfzManSThLRjQMTVcF316SRniiz9dWeqbvUTieQgBuuaJHYLEp5brKwRoku4RLZnc2pKwv7ZBCFSHd--3CHxBsL766uugcfEOeCd_tDJnMnINhCcxIun_HJyzP3_GTIoPhuPrWw21qcCjJI6wNgbAG_uEctOljwjicLbp9WmBl1KzoUHKUaVs_4wm7l4SkPzl5Uzrez_KgspmEs9DPLG0FspVRD8zfdLCIUNB9A86Cvmy30-yvvUqOOtNK5LomlUOA7nguB7TToBHsfv3XMqNA7rU-B4xJow-nSt5zb5dFffVM6O0nqBtPoD865y8WT68ZuHD4W64WBKh-tWIDb0-ms-m7YvY4q2FWMCpQutVXJPCSMgsRCpd_SZsuTUr6-5lgYC9x1OldXbLGgD6LsEZ8riiwcJzaRVe01UKU18jziXlQnTOhkyTyajz-Uu7apaWWh_wE0M_h0D8CgCiHFz11AwJKpQ4=w1184-h888-no",
					"desc": "Two young reindeer laying on the straw in a barn. One of them only has one antler.",
					"caption": "Unicorn Moose and Little Buddy, Dec 2017",
				},
				{
					"picture": "https://lh3.googleusercontent.com/AH6MtUs8E-8XBJ-cJKO5yMV3WSW_SN3mOSt2mSVml3hUWm8dMN2qgrDnzexNGuiCKUsZ6rffkERVuf65jDnY87PNbR80ZTkUtGppXgnlL16mhFGeyaq10yrRV3E7iIrx9hp80TB-UF5-PJodhpB51vfkAdkB7lKie6K_z8CnDTOsCjqgvUIaPuwOoGR3QiIV5uhWYV0jDQyHjFk-Byc_WK13g0sIcRNQ3ZrA-919btSku5wEmHrtUJ6ssMqpXQBzXM5UUw5hCPx-Vj0nPZyUxDi5fkGE_F85Cwi_qjgMqJG4w__8QaYQBT9QYOapzDN7y8RmwlKr48aA8L0zr4hEuNYHAU5-K03gyZM7dEaVWw6cqUcoepGIDRd5q3VgBTtn3vYuDdOhlsDBsdemXbbslV3wOAFEzcYmpgZyvONxe5I5GCT3p4murU0FoXQs0CrfED560C7uouxLRZ_RIgWRyK3bHB5DufdMFCVWiLSCRrqGvjOvBuZyeAA6wqwz0zQmWqfy_4LrRTd8tGlBsuqqoSMvOF9K9jg7QcxbSeg25BNM-aa3S45epHm5URMO8vmz3NyRZuIO8ZbM78-t0aUnSMxXqLkYklSszfpdwO6BMTWJ04QL7Pefit8k-r8hmFmpziddw63SHy-StUmO5yfUXhX4nFgEA2AYHm0ruzzR_5vBr7mb-hFLo9Ru4OMEzI2yA3tF4myujGXZLtkm0D9QIDxga0AQws2W-ADhdwO_Um2Tybz8=w1184-h888-no",
					"desc": "A cheerful looking person holds the head of a less-cheerful looking reindeer.",
					"caption": "Dr. Kelly comes out to castrate the boys.",
				},
				{
					"picture": "https://lh3.googleusercontent.com/l8A3N0bvADJCFSrVy-KI4Vq46wEb2glr2n8e3zE0NvbEnkwjgPi6HtBbMA3KcnoAqldgZ4gdkBZSjZFxD1OzIyctBprV1ephzz6ZJ6SqQ8ryVOzbSeTZ9Jclxx5AZkcoo2QiRdKUIjx4DZkhiID-_0WgG1zEJ2kcG-FpKayJo6Ayc3PKIR31Btf2LN8YH4HtLWBaDVhJzE8ArZR-SlIH9P9f9wDdshMectrRKMbjrswaPRmZPtOVmN2kON3Owcd955m4XXOjIAQ_GUR4sP8sNiI-OWYLsV3KMKYS09hCsEzetnax1kK24r4qS2vAe-wWxnQ9mWHANIkZ_Gf0AHmQBXtJ-47NGWuDLJHAooj2VwBFvSFdpt6RO-qfQsoE-MOAeA_-gJ50lJ8h61t4RYg1dSaFIw86zPwEgsVyFYshC4OcsHLLTvmCLAzU6Zl3bJgsYnYy_MnLcJBkEms1CdqjW96yfGGHs7ywepHwwCe6QAHCCx5TwxEwo_07LgZIPzoChwq5eDgEnnkL51dClVoxdd5lT66FwzwaVDmUFXQqr_Qv-ygYsd--Vpz0IBp96ENvXchfKNd66-7oe8FSew55CcslAMt8mGwi-BHSbqbUEd7cnUFzY_ZwXmdNbzsQpr_uHPa5Ltg0ybdWu-R6Db2CG_mOmZxl3SPdNPXllc3dS1ep_QwUFwdAHciwo2DVbXRGLqqZBFOYIfOaN5mEtuMC9EQl_xvcoPuy4xxl3Eb0OTEx_q_I=w1184-h888-no",
					"desc": "A man holds the halters of two reindeer. Both reindeer have stubby, fuzzy antlers.",
					"caption": "Spring of 2018, their new antlers are growing",
				},
				{
					"picture": "https://lh3.googleusercontent.com/WSqRIWvYVG_CXQbdI7-KamxD-XGtHa6uLyvJJon4XLQdtvHq-DXErfNcgL2AL3_QbylupBKqttsb6QdHVe0TIMWdJ_3SKDgBgzbvaZh3SpGrhMVpmgm7PNAIdA_e3Iuevc2SlelRoXjhaM3wtI9Hnlz1hFccKhKPvlKzKb1vOfEj0iauoRRY_8DJEEmiDdpKnJwmYopR0H6HTqu9A906O8Inh15-YzJfa1ClMsPZToYRPQt4U-d-gt_lTYx4n0o3Re4jPCbB7StODkcu-4dd74Tb5BVo-45ZZWc1CTk8paeVMgLsRCfP7-iIBK5AGnMnH8slUa6RVFn14uO62uFl407Jd2uBvjgolMa0T9ZE0yhkuNFzAL0UXh1HQViSqKs-AixGpwO458EAABP-654Bs8CaVf8VvKO-ikN8JyF8jwuenIBKWB38PuSiEIB8mfkC8lQgsmscT9jwKPsut3v2066TBn7faiID2Sf_hGsR1CWcEQOEsZabFuWPT-2grA9oAijiLPxvC0T8DKstneLPoHS8hMw4zHeGu7MIwSgzG0qwiezFUklgzI3oGgrcNGE_6dd_HEMd6Nzrf6IkSJijHbnBXugFmVvK8AVo2GLKIkUIWbVuKZgo0GsBqIF7GKlH1fdsLub1mFYN7FKTSYg4erzQhb-KunDRx_RPTlYkdsTnPfVXoEvs3CYFG0J5wyOFt--Q7-5UrrLJz6oUlCJnOlyVzOW8QqsUkg4jAXyUHv2qO3yl=w1184-h888-no",
					"desc": "A close-up of the stubby, fuzzy antlers on one of the reindeer.",
					"caption": "Amazing how fast the antlers grow, Little Buddy",
				},
				{
					"picture": "https://lh3.googleusercontent.com/B0f51cShkvjVafAro9efXk9tdANV8CQ2jHK5NX8uPomKBiTl-naZa8xFnTxLN4M-hj_fcnq9eSKevAUNfG_pz9jVNeE2zc1-uqTeUlCMpZ--S1Gktqxo74OYuZF_bDGtybnV09p52j7BemFtcFfEo23FOLF7IUN51Q2J18p7W2ZOQ-GdQR01-MEEq3CSGbtufhESl0QG67tg_cAE_aoc3ugFoX_hNy92iDA9N3r9pfgW2zuwy243XEXRj6lD3Mx4yauereT3IpKpl7ZBlCOeuKFWt_whhENrgKTHmtXAhc-gpL1il-l70zCfSbZ7jnB1danS-spIaGQ3QF56scTKRGIvTZBDOLoo5c2uibbUiIMMr4qZr69cQU5HLSrU1FZKS9g4BKsYAF1RbF0KhU2ryOT7YwJ5Bhfzqmzau5rrEUdSCiuW7LlrQe8M-aIYFsvO-peeiL9LNuvMk_yMszwLJQWjkYgEgKFH8_3gK40kMW0dhWLUr3v5pTg5FNmHgJL169op9_0C1OcItQTVtCVPIafwZZ_WfOhs9jxzYGPrG9GoAqiAmdDCVN9yVWD-z7ngO35afTyyK24qCejljt9LYmu9qKrVbYmbGyEyx_svfF3_hnBKGEH-b5SlG16bjYfxw0OuhQM1RLUY_VVXN2KGT6xftVtM4_GQ3Ma5uqsdRBpMiyBm-BAtn4BB037nVXJgL-ZuNenyjZjxKMQSn783GP04skzmP5IJ_cY0OIr1Jd2Nyf6M=w1184-h888-no",
					"desc": "A close-up of the stubby, fuzzy antlers on the other reindeer.",
					"caption": "Moose is a little behind in the antler race.",
				},
				{
					"picture": "https://lh3.googleusercontent.com/xBgJ-c2Av_0JggM9Js3dowo1mr9HOsfMDd4eVZ7VDp2LidSBkEPBDkU6WyWmbNMunD1468NdJZQpnCSCHYanColODJIZm8ItIFL5eYE9dwyUDB3FMlZ5L25K7VX9yoobaZ25EZuPuDjn4X48eoIoVRjUnIpandSQu_T6HYKKD4blkYthpa0faes01lxJGIl598cizleMA7IhfeLYh3UJNSLgivlEc8FY4aKW_siKqXDkkgn8mK5qFvSNN7a7tdKvpBJAfGwhyCqjhtFMoaksA8JOXh-Lnc3pmD3uIlWiwq9vJ_8hEmbxtfWa7_RuL5WB3AtPsdXilgwopM_Mq2q4LbU5k_lhUT2u8jPEg3BVMAPF9Z0ofl4S0oGJoIYB61qCzg8xrD8PWCnyDcF-EZncBUGYh6Gb856IBjGCpf17MWfK1nhFqqhidYh_URCR1uYzFme3h1RCdA3tHeFUeFScmt_-q28qjoFH_Pt3rGeEJNnAMbNbr3UcB384B1wnfxnQYpDqM6nI4lub2YlwSn-M51gZoRn1rqpXtRwoSRcYt-wjrP3Gdiz3j1LA4E0oszYervct9jT4WvEcx57ME_5XWm1Hx5lygYjCWIns45N0NrI3UewNTetUpbuRJxocu2uEW_K2Ur8qu1P3ZhtBsufr8ruWtCt-rH_GcjAjEtc3UMgyh40NJrSg9wAkovn3gm26x0Jif4OISXrbpn6PSJRhTQAJU1H6TigL33u4QDFf2_-x1xxX=w1581-h889-no",
					"desc": "Two reindeer with long, fuzzy antlers and shaggy molting fur.",
					"caption": "Moose in the foreground, Little Buddy in the background. Antlers still growing, winter fur almost gone.",
				},
			],
		},
		{
			"name": "Hanging Out",
			"photos": [
				{
					"picture": "https://lh3.googleusercontent.com/Ct_QCgsEX0fC_fzKZJI4S7V-qnblcpev5WuWTIVxrqLnML9ei_xRkhtLH6WhFQU-XY6qaVq42iANo9rC8gTltfSh8UK-YxQUH-dysQfSZKLmOk9mYXTSUq0eM7jD7TJVgCxul0xqj9Q_TLS5MRXF5CnB9iRLsjFlZ0avn9X672XV2z60KxcbfdeQN5eVCH-5nSoGTiB-s0KF25cPe1nmKdVu81FSufcwWvUO2mXDYWlvqc-D6555PnAgVWpaVqXlfX5iF1qtP-I9Uf66FKoG0n7UjbYKu_bW5xJRXbVaIfO6_v5qNrrLwvw-WYurJFPAqiSvUi_Y1XNBjUHLTKlUcqTD8alTO94J43zT_iHaAzlQBmXWeRp5HGY9NWsWeI3Ma1elVe2u2Iy7NsAqyHDaH3nepGM5s-VzSKb_sXNVJMWwj2T7fwsSXAe-kYWlj7bdzZ5pDk-gC-AmC8elXHdpsvJXmBxre-Z9ed6idn8tkeLjpH2Tw63t1-f_6IEYuMneNqitzCr2C87_fJDH9INmPftwJXIWePRuxDRuk9gaN6uuv045KSUHWGYoU_1cXB2QmORZIplNiET9t9Zc6B9wmEfVWYX12IaEKiO-XMqGWw8q7DakXeVAwzG_CNyw9PbzggMRCWH30HXL1fycaDTbvhcgqSk4Tv1SdEJejfNaiggzttj9sfZc6A82hkehNysGAAwoL1QEjgqekbDV-B1pwqEpS0FNvq89P7xgL-o9F0Ue2GeZ=w625-h938-no",
					"desc": "A reindeer with fuzzy, knobbly antlers that are a few feet tall.",
					"caption": "And Moose's antlers have caught up and passed Little Buddy's",
				},
				{
					"picture": "https://lh3.googleusercontent.com/aRRqyEAL0yjCCAVXOZBGenuWILNPPwsdn9u3AGxPxZVvf4Ybv2V2IqbyNL3YX0UtwuCV5-z9KXFAteZVjUSrlqkAeNTKqD-e2lp2gv1ZAmbrY6Pd9BZ4i7JXKr981s4zNmCbkFjGMkY5AD9oJlNw0M-aa5tuCycAXMj6-95-62se-mMnOKFS6UTAe5CGsZdsieBGeY1I5N2fsZKgvKfEAXQFw2s_jD3DjpqfGs3sJ7kKg8WNFP2QSvPSSXQHLt4ovhdZGV3bZ1cGel4WV7Jf0blzGGco0CA1XuQmnyAcmCjrImg0mwYjn2C2jlLKpGWiCuiFtnmBvDDaUYM3nK7gqdtsKZPyieOrUlTVXEWySN1g-OYMBsNJ_rLR5YkH6slG0TU3BB0xZ9cyWppIr_c-9dhrxOn99JP-GCmDkDiyQ_ZZrlf0WrfusASnkEWw9GLPRK-8irOIHPF9jsdTE75ninwW7W_7aoE74y_p1fhl1XavnCSKw5YF7NfXPwFMHPo2gRPR-aGKjQWoIn64KVOz49Cl0XDonzUUKi5QzpH_1R-pS1m8f3N7fkpVvhd1wIeFNVUl_k4gtUzEN__03o64J60-T3g-XGb0i5oFdRADfcbNp6YQUcka9DcJrYU5gc9E66hWFQGpfg38kAXNzd3go8b_YB4nieYmz4-yqdC4Ez2EJ3ELTQ7dnjT0xjRKeKz2iT2VC7qb7pCIHqqJawxUdkgK65qfKSU0H_PNvNnq0LaPSVfS=w1200-h400-no",
					"desc": "Two reindeer running on a green lawn in front of the barn.",
					"caption": "Out for a jog",
				},
				{
					"picture": "https://lh3.googleusercontent.com/7Jj803cDJEfSz9K4VHEbyXTQ2j5oH9yHfcO1i0zgQqt6tT5GNsLCcg3cL7mQ1iKJmaUBf6OZEqJj1VE43hTqr3mDaND3V2DzILOFb-ScQUFIFZp7vRZyqvAdBSjOqzOkQk2mJ07aPodsoynAdA7cQajJwQx_TJrQOg9spk6TxlaLefSi0QQKJ1G7M1aCXA-gSxfBSmpSzYKTWwKQQcKm97uuG2YXb0f6WbIoWCFiNIcNjUIflnkAmzn9AmR-qzR9I19tUnusGpYrc8khKZOej3tuYQhjPyP9tcOkHLG01YGCMeVNBLqp8138afXKiDyaqmyVjeLeXyfresrByg-53RpN2QtwXL6jsFZtLSoLtaEX8wPVD7K6ZEZyl1Mhir84d3mdHSrCOelTxt1YajDxYRmuIKv9-k0FP51IbuDvq9Ny8CpuD0TcnLKktmGSCZp3TXCrzZGvAPaLdBEfRbplo0Y8UujM7kPYmh_S64ZnizO-pLwHlvEDYdAB9D9zda3CHs0g83h1uL9b_8DSyHsL1C7h1w4jrvKUqASHzgezZaJDCBn5UeugGuauFK8G4sr78bw2jLA7Wk3DBagpwclsY798j0mjHU5fsCfn4IFWrV630_Y8BHmS4ebH13_3giPzFXWM5CYtUng2WwbRMN1QYR8HJ51tbPm2oF9-8Hce48jabktdznx9Hb5bYb0_Jm5BMqGTRpNT729_Fd8VcItMaJ4zlhxHbzOK6wfu2xDqdcYG30S5=w1406-h937-no",
					"desc": "A reindeer in a red halter looking at the camera as if the cameraman has a treat and isn't sharing.",
					"caption": "Yes, you're beautiful",
				},
				{
					"picture": "https://lh3.googleusercontent.com/g5ttSBGyVNXc3QEy9mLiMGSLjrvuk5zvgL0bCegCYfShlOm3wZF929NyaSbL8ILcHVbVxA0Et9c8uMWKp9ilBYRYFiAIBNEqLr16bPqhZDYbGjOQrZa6ccuS0YVi3YFiFgk107EYUJmL28oSCODzxHB31o-9JlEWaiWJRci7MmbpHUjNrqElkqFIfa_tGUfATylwKR8IJAKb4i3eaIUdzqcpVf4nZckwJBlSoRkfjYi-L12_j4sjx4r9mvmikp3Cm_vF81x9k8BcNzign7npCoqPVKA821RnI6VsHwWteKA3Fhefokph6tQPWLcEV7NaqxppzFJJlvAoM9o92cUNMcLdqu0aCFHH8HarBOe3LFOOrudn5q2fGRDGfCUpHt5NNIZgj6zvGkLocrYfJzKV-VdLbYBv6KtoWUpzLsA3OtGF15s-bBs8e5D4vTNANGBG1oWCdIQ7iPf9QlFJxQ_CS_PK3Kvj0-GAQBKwnVDySV59zqoJziQw-wglnolFXnPtWvAeKVrai9dQI-0tbLRFxoCwck-EwhrX-zL5XVshCJm6zFEGT8bSI9lYnq62Ll-okfQiBka6Z5oqrNqrvfYL4SbcsDkrAFhECt_PecgC2YVpW6fIi_TmAAea0-F1HHHALE_hmR_nbRCojdLvWz7-Qt3LNxcWMc8LQJXch50k9sWqlbJlY7jnvGJdejWgD-kM9v_2Q2yrEXLNPZtttTK7KMc3wmYR6tMlJCl4y4IybY04nvcG=w1406-h937-no",
					"desc": "A reindeer in a green halter looking at the camera as if shocked by how awesome the person who hears this text is.",
					"caption": "Hi, Little Buddy",
				},
				{
					"picture": "https://lh3.googleusercontent.com/01t_cXi6hnmHzsw0QfGi_ydVddG0AzO2l-BEPJtPgkgWv6ICpTjwMWQXxe7RL5b9_xevkr-_XL_BnNmhSf_4gZ_lHW_CFd3rYwxTUazFOFtkwPS19fY3gmBoMy_eCQK5Ym91AuL9hjb2tiqOlRCb08RUCm77_qBDJR2N_6cYbtzBZ11z95BgaF4u1iBqzR1eaPE-HkE16WsjgWSkfd5K_Lb-2uCliY2Wyu-QfACyZs3zaTzBT8L2uAzkSjGnsAdS-y0-CnrPz6qk_cLddTXT3Um_eVc60F_gZy1OAmw9yb7DV0jEll3vuPPFMRBV86BHC9k4Go-ShZCP-tZL33AQcWIbL5bLYCAmcBu9TDvIYbzrpQHwp70GmyaVKGr1NSGxsBC63DiS14AZquDJrnVEnorTn0Pb4zlK54CMUL8C179n8YLkq12i6ur6QUvNZC9V6WrwPz8ijtKAU2PvZuSNqVMfPVtiPxNTHW4Pq6s9Lt4OYDSqvzcmDiK0ELeOkPSdFI4ZmUsUkk82CtV6U7fh9BER1SI-H80LpaeNyPl8MtotIuNVubAA7vn_0xd-4stVi_w1G2SaefiT5x5I87ocu0TwkoXxYVoPqaoPTzS9pdBf7SN-cWF9iidx-ITt_OHyGhROSDxwZKXpVj0IIKwo22QGBnZpCGw57YZieLJaBHNihmvsDG1CCMRJy0iL0F9n4JX1VT75bxzqAdqBLBU-oAVdnyLM8sURucbPyAQh7nPIViDJ=w1406-h937-no",
					"desc": "A reindeer in a red halter giving the camera a sideways look.",
					"caption": "Hi, Moose",
				},
				{
					"picture": "https://lh3.googleusercontent.com/_VJg9L7_FgehBtGNWrkw3B-EtvrD6FEB_Mj99udeSDplwojJmvvIeRFYl0E0b7EjbyAXZU-CokWOyC8vgTNii5v5iZ9w0y2Js-zlzyWlZwqWuOUgaNxEg9vyfWxZTMzEGBhlSxcNLZtVqvQ2MUTAvhL4QQ-q3V9_aO3G69PRMuQXrk5Zl0dAfEUzPaYglVg1cTmAeETe-b5_Ra0OfdOWGOdM4hbaecXUrafehkb82a0Ugk1VxpKOtgON4vhA8kxNQrEeFcLit6VFnbDHIt0kDbV1EhUl72DAye6RdDyyVO6QhtlkUKDDlbNu0leTOf06aYcAWv3gw8qQe3aSmV50nzVv_cdyj-3EB0Ka_JI9ladoLMCNAAfUaIXh4AdwHXJCf12fhirAWdEn7eBIg6il3goso-LKFLgzgkdKzEmomjtcvJzs2c-fq1M-MHDNEqfckM6poUvw3urcy3iQlQPf-A01MFEM52Y5xUxeujmhEKoCpVvFqm5cLk8TgnWn6YGJkIBCWz-XnD2G-_lF5xLiSz-zvviftGj7pKKuzuBY1SHjqAZtd3RyMuJOxHLt48uTb-li7tUIEe5xglAMQdyn3sZ9_KHmL3DT3Zovy9YnVoXrf0hau8St8LP2cjMuQOaAFuK79aM70zRlZaPFuQtgZ48R4Ro94ZCnPHJkj58bJvYqsfIjKm2Aph3M7B1kX3qvHPED5xdR6fyI5lLutJwPV-sOY3NQD-ZCEfY9eDPprDMsyNDb=w1406-h937-no",
					"desc": "Two reindeer lying down and dozing. The grass is green and there's a little snow on the roof of the barn behind them.",
					"caption": "Rough morning, time for a nap",
				},
				{
					"picture": "https://lh3.googleusercontent.com/2NU2clscBi0Cx3uy85tEfj06-IoV1y_huDe1d8p78KerACbDsIJv0nSjxpN2pm08BJAYZeZdtnvJcfG5P7dNB9K4pZYO_ZflIlD90KO7wrybZwBiRlQgZ7__gkAINtulcjnVABeLvMpRsMuHoC8z5FLoI5u2pz_9H6mIKg5_6kGes3qm9xFUpb1uW1SBfV_eLEE8IvM67Kbqc658je8tCcP9jEr0YuHWqkGDQDPIiDMtytR5BzUsRr0qau3iygo6h7SU7nNhZPzikoTe61Fy1JhKwSH-3UEntBb2gTHNy5hgmh-MYY-jXI2VlpFj6l6m85Y8BKAD1kDMrraeHhiH1s0v4WQT4othatSPPyh6GOIsxAsuFdX1HLRrCBaWEyQ8NDMXOhSqZN3cicwozLNmFLa6halEJ0E5zBYuinlWaNiGtr13xX9f8tGD9vLZz3XKU-Td12AtwhSY6d_qreUGp4gI1FNy_QWZ9DqMcQIysT3nUOI_JAmFF02p81kcv_15iMcbrsPLNshihLKJy7KnFxDixMAYHySZ_D9-wumGAAD4_lZKxeQ0eaYHJ6DrywIc80-NjovArjTgU13tLmQ9w-j3nV3YWU_r616EEhDxyBFmukyXK-mXFvWc7t4qpciFjFt_otdykZBJISBJjFL_Yi6YBQjbuoBqwDqVS6iGiYeEh6g8kiT8i3GtDRUX7hQYV1KstW9oEtgLLi93wiCwciuVkFecLI2LXOW31xG3Gr53cf1K=w1406-h937-no",
					"desc": "Two reindeer peeking over a wooden board with their mouths open.",
					"caption": "They laugh at my Dad jokes sometimes.",
				},
				{
					"picture": "https://lh3.googleusercontent.com/jI8oQLD2pfWBdjiIed07xNKO7kmM0hJ72r9Kv9maavhFMw4-OeQl5lKaz1kVA5exV3LudX57fUhNkZGZM8ejA3fVsIqvnw6czCwNxiaYvjqSH5CXDMkXLZNI4J6uSrCYOCmf3tt8xtbyXNBf3LtUPpy2TgiBoOBw-qQB3bRF5LnflDsTLITR-0BFO7rqjerOMmKaVkP6sGmyfdsnQ-wE6vNuWoQHVtpGhthJwwFoE_l00Qah1iOhNGXwoNmgzT7v7JIdXZitUWt0VHmwFjp5Awyr5XQtVNeKChNfoJ5wR5fRnZUOFwern3klWZXv_u86pSDDyolgsDu7bTmPNrNGvBUfLyRo1sf-gXCO6re6uR8atOVG-iqu3b7O_3mRLDEs5MusirrbPXStpriKpNr9OqproXL5QvENEtm8DNGAmI018QEVFVIowXtcLRb9Chk-g1V7jOqP4yIp-0YDjmSFCJT4W6L1XgPFqNG_iLgLiWVtDvNzl7pPPSi_EVgFcHkGlX_VgrO8Qj3HULdkLRvHfxEKhX-aGPC0LFAHlij9u_r7cFe0CBn1lkm5SRrFq1bHYokHomMSEvtxkOIs94Jl3zMi08mjjmzKJcMKOqUXyD-VEkiTyHBJelkiwCcH7DYw43jDGkXYGbU-CpJPFJOGXYOChIw1QsbJAD8dpkFXdyiWHynCkSa4VAbrzCAF4wRzjpzdJzhuWBW6GV43fMHKQwFvQ0yPJtwzQwVJHI7AyjOPx6hQ=w1406-h937-no",
					"desc": "A reindeer with a snowy face noses the camera.",
					"caption": "Finally, we get to enjoy some snow",
				},
				{
					"picture": "https://lh3.googleusercontent.com/Gn5Oci7rPElwETqtf96f24fvO3Qf90cpAgfYvaLYK3d5jUtAgkNZkIKUKpJ-27NwkpZpMPeoM6bBZkzB16p0yFGqD3aK81rrC83I24_iCOVvmmBJhYIMugyOG8ZiQCC8EjSqY6B88s61rTdU90yKTqK2eANTQjmsiO8IjxsxuUkEH05WQuNbdhzveJoQ-CV-UVeCQPm2NgC1DBeX9A2nHtTaNIYH89qBlW1xj6DsU9CvdEi46RrGRzP7XBaYb9RXmdx65Cu1hBbJ_HIekojW6tlzE6frWcL2vBN5pp5CATq65MReaXbPYiRuj92TDPMXg5_2zhGtLSPTnvN-Gf41ZjVVcJa0hDc0Y4DG2yN3IByWu-E27ilXF5_s8NfAn6tCU055zBBE-fVrZSZYdqE77wfDV3KN-OsQIBJiuGzZVkQyCHMQpN7z-l1EWmA-uCwVaGMGMBmbt5wlgiTRIogkSYCRXELrfkFI0sCBuxxIAkeWT1sVNaXc1LOpiyCEeJlT3ysQNitQoOXh6j9-Zr2DFaLeS2fJ1kfqnOYsAXAxUfFnG75a1rxQKUbjIdY7l3RqRViJ7ph0FdzPO8sOW8xr1oKpCI7PRl-ssi_Yc0gkz7XnMOkEsAiEbheb5l34cZ-Ex7PBPPIRCfXsNLX9HyMa6yC0zGfsOKE4EzY5o3tsN59NJFnBXSJcTzVwiDpu1PjZI3V8kA0i9IGAe3-R2IyiRk6wACkQbgwF9LlMGfosXuZb4D3J=w1312-h937-no",
					"desc": "Two reindeer wandering in the snow.",
					"caption": "Trekking",
				},
				{
					"picture": "https://lh3.googleusercontent.com/WB7hZXpfvVhJ0p3Hl7HXhM6KZ4af4tHj7d4g25GxESptIJ2WT23a5shxwbvxIIehVX1cJkWGAGIlzbR95gCxYuoDCreyETn9nphiDscQz8Qjt6l8_dUbHU_XX0YEWa_qTZR56d9krlmKb7J-897lpCPX1XBL2iQH9g07eyoPannoo7FGYtIbHSStN5mCJsLzKDQ40NJg9d1Kr7xONtN-6ujcF7F3Qq6yJ1JaMgDArhXJ_rFZpZJCawicGnTVoGtf6R0EHY28BDr9fHE4nH8Bd8y1skvqihnsqGGKZhV2uPD-lvDSk70n9cisBDWZP-TxOsP4lHExIvfWAOcL1hTp5J79n_fImknqlI9oXQdhDQbaBWaguPrUrRkt1v2r-XVGxKWZ9rAd3JS9ClaggaccUDN3hQwgQ-UFmBGD2LF1m1QyMdrKgE0akg2EyCyOWeVqzJQ_O8OoTDr_zllXpV3eBcS-CEmFglZfGOerZXg6nScDMyCOKhJPwK5ihrBl8lujSobceQ-7O_Aul1RqW1Qt1GCsMJ5aNZvuMKZkziSFZ2DAJk-h6V1MJemjKo-k6p3KYe_G5UUZyKat-bDWy7UqJG5II-pL6lEqmozj3dU3sh7Dx6RQz9DZb6VqyYWgHCp_OoGEiNivxk3eox0iv6RKdMcxchbOxZUrP2eu5qq4JxiAnHt2AO9Tv3kMqg5x85X74yE6f8GUnXHGFywGfZt_ATQhwFR4QKya8heGf5HJlH1Jtg7a=w1406-h937-no",
					"desc": "A reindeer in a red halter giving the camera another sideways look. His nose is all snowy.",
					"caption": "Snowy noses are the best noses",
				},
				{
					"picture": "https://lh3.googleusercontent.com/au_x6M9UxeL3w-pNz0XI10YiPBD6B2UPgX-z11n44Jb-ZMGXQXlBGe6IPRlqfI2ll_LX3uBkwQMULXnEsPsyEgQEe68IBYF5m0L-Vz2Np48OfrtklOZWocHA9wQzB4A3aXUB5-gk5ljSk8Al5c7G65xM47KNPdKGc3Uc0BHU2UIdpgAuoXrKf_RAu1Skv9kneuWOGm3FNQuJelHHiaIPerhRn2bZRbVFVyafhOynBzFCAL6V-UtvzMYovyhEXho3Y5wFR041BBuC670-A8bET2R_PD-ZUfgjjChfIlP4-QO1dkW1g5_NstvluM504o-sASV2zoFJ_G45INV8PaJ7972nmIaHWIvfLeujwVCqEDPMNaiwWApsIYhya8EutSXFHfnUmRXF1g-AjJdDuReeA8O-_479_qcliMKiGSHN_PYynf8cMjp9sNCWibvOCh7_dS5U4pms71GwIOHsNXkEfHs-WYACxXKQvn8-JZv_WCLRvDS-DjRDPrKvtxr9DJeafsEePqMo8tg3-VDCYo9qMqBVSPlPfGjifcoksozuzagf_MhqhCDX8hkiGKPVa2BFwLZXV-5HYULzopeK89Tkrp5idlejkQB1LlsuviaC3U6CjF_sQeXx3OyPVmfK-h6PhD8B6_KCbc6kLIoP19TCGvGBhu_D4TjaexwAEq9T1ZiaqQxJmF-0bQ2TnOl1P1egd2_x35m_VcUsxuRv6ZUMmvSj000XB1U-epZX_Z1-iP1nUqhc=w1406-h937-no",
					"desc": "Two reindeer looking at the camera like they're about to drop a mix tape.",
					"caption": "Enjoying the snow",
				},
				{
					"picture": "https://lh3.googleusercontent.com/gagaiL8DGAg7uvJAXL4xtpzCCsYWwozSK20lApSSuC2j7ixq9X9RU0LijbkceIORWY1jdupKgYwPM39KDtAWnG7xXu2gTUaLMYrmZL_GKw5urj9NE1vo1mDvbylRuASAB9PeHEHy6j_LawDFlmVcQ2mSEfyv-jLsFxdWG587xb6zqRDG6uE6Og-VNafiw3c-G40xt74f-C-ENhJRZ_2dNJHA1BAlN5QeCcuNVDGw3w2ryAvUex8Oo7ICuSmPop5ahcHL3Y9dnhf37Xy6ub8ze2LFOy7F2FFgZTTirTMVizXSyxKuOmhrnUcOlyQcWvsWSBe0v5pPruNSTnOJXLU7ROT8BJvw4TmdgAlL6y8b9w_7EAgflays_X2C5JOnI_YDTCZbRHfHGJeSWaIKGqjobRDZ0ipb8MINkzepDkU8a3cHDXbGCh_WQI66Ljfq05TbMfljNdEfLQMDyXe3xhdpSwG3ZiOR8F5dygByTS2zqBraXzr0nBXHFmcCEmtbYqoBsLaWJRSnYws9CPrKOkKz4eho86euai_M5fB5tBDfJgHuvR7A1fGMWa9HyoVsFnn0UxTYSHiTAQby5LyAMJIYEPKmA9xkPg_2MDwp0Bcj2Ow2H1KHQqAB8jD4Hg7nDNPT_TcrEY9fBOCQ2jJuMlPeJSfUH9Hsn5vu3UJ5IGCMxNvUjPddYSrr1hsWPJjOGdAG2BUcsAeB07DakQrvUqIaWj-FFfGU_L4EvU2PnercqUvK8ySb=w1406-h937-no",
					"desc": "Two reindeer standing contemplatively behind a fence in a snowy field.",
					"caption": "December weather",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3en0kk6mABltXW9_oCoRn0lBH17xeGGAE4DY4u6k2er7UGW7bre8QuFjz1OFnZ_6C62NvCEtoKcEvYqE1dyw99-se0fGKVxZeNn-72vSU3civhlel2W4FC-uhc2J9RyHUQFMX0zHe9orr9NjABINfUs=w1406-h937-no?authuser=0",
					"desc": "A reindeer with bells on being fed from a red bucket.",
					"caption": "omnomnom",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3dIGdjpRQ2tRla9QVPZ-f6JKX4rohXDh-jxztdGAJ87RYzvlHD0b35NYAev-9m2uiGleD_sx8z85P9zhss4yijsqF8kRsd-dHIfGUyAVzgKXctSbEpHLeZ91EfC2ZbCuO-piGB1Rug8JNFCBx-hqzt7=w1172-h937-no?authuser=0",
					"desc": "A happy couple, each holding a reindeer, posing in front of a barn in the springtime.",
					"caption": "Group photo!",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3eQ9lWrjmCree7WwYss3lQxTYB38k40q9DdFstLktpprUzMP8LiHgt2BUaQRovtIjkDPRhKTFlJC9VS_R6YYRSRXuWvcE-5HIMByb3Guq4yWeeNKt9fzKadf3TW6FoljuOSBpctTkcyvPk_G6iP9C8d=w1172-h937-no?authuser=0",
					"desc": "A reindeer in a red halter looking to the left with knobby fuzzy antlers.",
					"caption": "Professional photo day!",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3dhNh0HcOfROP6n3yU4r-bFtmkixCdbKkC4wPWsepR5gGTmoenUtZaW8Y8J-Fazg30sQWpcKGJzR2NO9HugJO3Qt4U5EeQk6psMgC7xsDVFJ8jQB9RDe2goCkHZNZ4adgld0i3cmT-tzUXQ6L1_lHJk=w1172-h937-no?authuser=0",
					"desc": "A reindeer in a red halter looking to the left with weirder knobby fuzzy antlers.",
					"caption": "At least one of them dressed up for photos",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3c-gSmUg2YdZ6GsH9ZN-IJfTUx-wOKj0H5xHXe0eoIM6_I0j811hn7uIG2aQOQia8IyvZCtvUgNs89fexj-0X8AIPH2Zy_cWCaMcesfTUg9akhzjVI8MgxlYcO6jCArp1bqOdM89Sd9_AI01Qtt9wNcAQ=w1669-h938-no?authuser=0",
					"desc": "Two baby reindeer in front of a fence. Two adult reindeer behind the fence. One of the babies is grazing and the other is mugging for the camera.",
					"caption": "The new boys arrive! Uhtred on the left, Ragnar on the right",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3dfo87HBSbb5yMN7sKO09G25V1sfN3bL9k5CPB7b9esC5DDiqUeCj0tfdL1VyGxEFtL0jV70YpdhhSpyDmH5ecVmePZ_taBzSmmhP5e_uuU-gATGMYEuMB9nFkN-tZpDCgsPDyP8QfcBeFi7tB24ysXtg=w1669-h938-no?authuser=0",
					"desc": "A baby reindeer peers through the fence at an adult reindeer.",
					"caption": "Moose is not sure what to think of the new guy",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3c1fSdMkqU2IbJgvH-JfOfEZ41DQc9uiUD246r7YqRHZ2_sm8pfKmlnCDqDlhYgV6-XZ1db3HSPUtuEBsWBfpTVz_YUcsHozmcEJ2JImR15mfFfgtX4KU8DJXq0w9Z1y1MdAge8TY_kObVeikD0slhjww=w1669-h938-no?authuser=0",
					"desc": "A baby reindeer sticks his nose through the fence at an adult reindeer.",
					"caption": "Uhtred tries to kiss Moose through the fence",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3djijCJSFuOhofkPE6ZotrDKeWS0eFEx1rlv5nJTuWffDc08FFaHsSlqLFY1iUb3S0OV8ijZPIGRMUG1IA3YbRRxclfYFzgXvntdeTC3GEskgUwVSXbLy48d-87rFoE_5xAXxpQ61x0P-4RrNhGmGGXWA=w1669-h938-no?authuser=0",
					"desc": "A baby reindeer grazing. You can see that one of his antlers has a funky spike that is flat against his head.",
					"caption": "Ragnar, the Viking, with his wonky forehead antlers",
				},
			],
		},
		{
			"name": "New Construction 2020",
			"photos": [
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3f-Y9qc9XRURdLIDWFvQPcQWnphboPp1fhb2EpTrPhCfqhoZSeRAr_YiR3RitcuxZRq5nWXKup2Yo5I4qsJC1oN_ULyCJFnzvDTjn6hHN079n2pbjas2-DzfMB-nq0HgLDAWlq0mxf20Rwi6IcrVFUQmw=w1669-h938-no?authuser=0",
					"desc": "The frame of a short hallway attached to the barn. The posts still have bark on them.",
					"caption": "The beginnings of the back patio for the boys to dine ",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3crO9ZnOstGUi15UE8YOo8G0FC8HNvPDKTHGS3xmfB8C44bAKqgzaLaIIRi0S3HLxFFCSfEq41KFXr6lb4on_XWyWbRtvXbRx9xghNF-w_WsPO3GPXctXt8OATi8S7qhYSB-h-1mPWx5Cxb3smFd_ViKg=w1669-h938-no?authuser=0",
					"desc": "The frame of a short hallway with no walls. The posts still have bark on them. Evenly spaced horizontal boards are laid along the length of the roof.",
					"caption": "Roof boards provide some shade until the shingles are on",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3e5jcEVP0S4NGSIHc-5Kzl0I3dpjOsPjNVKTTlp8_CLZrhLijRkB6g_p46XRPPQ9dxvAGPDso9B6Rj4QEovSoG6h6la2A7LgLaG4vsj0c7G29eT_83wqFcX5IMncWIeN2DR00m4GWrExYrDcS5r4Zejng=w1669-h938-no?authuser=0",
					"desc": "The top of a short hallway attached to the barn. The roof is shingled with cedar shingles.",
					"caption": "Cedar shingles from Maine complete the outdoor dining room",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3eK4jJ7H7R-6tV6HD0rxyVNyjU0ayXJoxAZFCWT6qDcBYYnfT9221-7eLPhaVGKNxJ-j9mvYsaWNhKKkxHGlFxLESGdTZjhFf3XGWjhzJ1YHYJ-N1mop_jD6n_kf1Zq2jaumx6zeeTPAwM09MobzTuImw=w1669-h938-no?authuser=0",
					"desc": "Two reindeer eating out of a trough under the roof of the short hallway. There's probably a better word than hallway, because three sides are open air and one side is attached to the barn.",
					"caption": "I think the boys like the new dining facility",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3crbZApsSTGEx0M4SybtjAi9JZbMl6Lne3WGyBPlYHF_BN9WnrDKDPxgTVYqPPdFPHLaGve0okr4_iTLoXWYut_GmqK1zza7XbEhQWT7v2Bq9oRv5TTxwYauHgZPXXPyXYB3VEV_vb3TY8qRlBd2E9APg=w1669-h938-no?authuser=0",
					"desc": "The beginning of a new entryway to the barn. Some contraption of timber and ropes seems to be heavily involved. I don't know what's going on here, I just post the pictures.",
					"caption": "Summer and COVID keeps us doing outdoor projects",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3epxAQ_RTpJxZkSnf_IPeeamEkuGJMbOYXFdKZgVeyt227v7LVGRayeq0Vem9HKvR1wM3Fqn0Ty__NTiBv1NgtwkjR9J6Sc5Rn9Zp1Pf-i15suQyePtZ1AQOaI2rql9vN27a1hH0iEqlLWSQPNvPdpMmw=w1669-h938-no?authuser=0",
					"desc": "A side view of the beginning of the new entryway. This gives a better view of the timber-and-rope contraption involved, but I still don't know what's going on.",
					"caption": "Learned how to use a \"Gin Pole\" to lift 32 ft beams for a covered front entry way",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3e7aP0Vlx7J4sjL8OcMCc9wTOBeOY7cMVWz_ueLJw6mC_1aYmSr1WwoLU5w3TYSspkveeoe6Dkx2IAVuzLiLz2_cuen9_RGHHwkJ8iryuz7VssIgyop-2kGBezB2fk67lSOvwUA0R2eQ3Fhq2nOjALegQ=w1669-h938-no?authuser=0",
					"desc": "Three poles laid along the length of the new entryway, ready to hold the roof.",
					"caption": "Three roof beams of ash are up, sitting on beams of wild cherry",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3eOXsBuRb1mYFINAeu-rVzsJpruD56ZhstKfVNuFbdtbSNOxobV_OzDyDyVGW2Kbh-O4W6qKqPIvtWePw7qoy2m_zlniO1cAwWzmKPQnK5_R2jqXS72cx9MEHVE94NpM56n_Qw1d8mjeabo5942UH7kNw=w1669-h938-no?authuser=0",
					"desc": "Angled supports have been added to the entryway frame. There are flower baskets hanging on the front-most posts. It's very pretty.",
					"caption": "Next task...lift the ridge beam up 2 feet",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3esq2rwMyS1BwkcYOyVP0ZzVbDi9obF6nuLuagzShSdNnYk4Dr1NQJ3jXyD7KfJyAOj_6Fn6iAdN5Nj2TyRPj6USZfHvJ2cWg6rcmXpRD_VsC4z1Q9f1Lo9A7mog5OkOxpPpIG9r37k30ZYqqdEOd2PGg=w1669-h938-no?authuser=0",
					"desc": "I was wrong, the previous poles that were going to hold the roof have been removed. Vertical posts are added to the horizontal frames and angled rafters are in place, ready to hold the roof.",
					"caption": "And the frame is done! The Emerald Ash Borer killed lots of my Ash trees but the Ash makes good rafters",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3evvPm90tmSKoe2O1ma161AVtDOhNUzkVTHpDCrWGf8NjkFkGjDCoGN7mmyjcQNYDdxPz6vjU0ODFyNwXnB8Uh4P9IrsOdM3c-_J35tUoau0Q993Pku7iUvXHKbkEt9vOB5jCrGYkvwFTcPGnVqMEVF0A=w1669-h938-no?authuser=0",
					"desc": "A side view of the in-progress entryway. One reindeer is grazing and one is eyeing the gate.",
					"caption": "The big boys checking out the new entry way",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3fS_RC7TGTYgR-8ReutPiW-IGbFD09qERI8O4XKuKhlBMeXOAXZh8FT1VT8wmnpt6-g3X7Sj2m_JZ-ZWyHNCqn-xEXztVSztCCsB8rlcX3IpgAEq9aWzhsF6O3HyWWndxJPfaQKKkd4a1DpiGWaDEtQ8g=w1669-h938-no?authuser=0",
					"desc": "The frame of a small building near the entryway. The posts still have bark on them. The floor appears to be plywood. There's a hanging basket of flowers in the foreground.",
					"caption": "While I wait for more cedar shingles, the Weihnachtshutte takes shape",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3f2YVb-eoqa478fJZhgpggDPE9LOR9IOjhMOCkEZpzG0mdVfx82hM6ilUSYHsMhuunF8XaRuxaqqP4jhOfVn-fKh9cAtzbYsPEkJM5ir0-nBGTbpO-YgCgjBku6av24X2q9dXEkjFE5kzGP0R4wQ3JR0Q=w1669-h938-no?authuser=0",
					"desc": "A small building near the entryway with live-edge clapboard siding. It looks like someone shaved a tree and made a frilly skirt out of it for the building.",
					"caption": "Edge/slab wood that was bound for the fire was repurposed for siding",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3eyFxYMfQKxy8uoYbNnQ9pefIb_6s58V5MZtv98rZF8jJeP5zaeAM2NDXr1rG4C-j1d8gSJPfugWHUG3KrSfxx_B6EgDsjumPvbBfY_Drg1L1Swn9JLw9AUA3We_8fGGi8_qzWJz1JYzO6vXiRobgFgCw=w1669-h938-no?authuser=0",
					"desc": "The inside of a small building, showing the wood siding, plywood floor, and posts with bark on them. There is a door and a large window with shelf to the side.",
					"caption": "Weihnachtshutte from the inside",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3cfsXdqFWX34Y-KIf5QTap7IW-fyE5uogjwJo9FyH-9lZ3XfiSAfdsq9t1LoL9T844gle42yVKrLm05c4r8mNtfRUgvRlpQQLVJd2hZrqy0GWQwOuy49J1uwBu7FP7CCGpEcoEgouQmkv95sjd4kWVpeQ=w1669-h938-no?authuser=0",
					"desc": "The roof of the entryway with piles of cedar shingles sitting on it, ready to be attached to the boards of the roof.",
					"caption": "Six squares of shingles have arrived and are ready to be installed",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3fWWq03S5SoQY6nEiTOKkC82ORY5f1wtqA_5M82bkqzW3YVww3RFzYSsjV5ad1G4NFvYA-2ZAqvEIZ6jZoGgJuO28dwPImOPfQRH4pOYG3tKF_rYoTXQz3QQ9hvZKJ_ySflusowoUmqVSc8ic8aT0SVFA=w1669-h938-no?authuser=0",
					"desc": "A ground-level view of the entryway and small building with piles of cedar shingles on their roofs.",
					"caption": "The progress is slow with an old school hammer and nails but it's a fun journey",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3f55ZZIgAw7LD2ONV-disYwdEuKLpHovTkVqFi5droRdZ9B1SAbZ4Lg7A-f5vBb4gSpkrw1498vpf9Ok08x6XP7_OBwRBsM8TC7paTNkXEX8czDHzdYH-jAHv8P50FNxfgMAxkNHu_l8_KDnxIdFx6g7w=w1669-h938-no?authuser=0",
					"desc": "The finished small building with maple syrup bottles and honey jars sitting on the shelf in the window.",
					"caption": "Syrup and honey waiting for somebody to take home at Christmas",
				},
			]
		},
	];

	// Put the photos on the page
	if (photos.length > 0) {
		document.getElementById('photo-gallery-container').innerHTML = "";
		for (var sectionIndex in photos) {
			document.getElementById('photo-gallery-container').innerHTML += "<h2>" + photos[sectionIndex].name + "</h2>";
			document.getElementById('photo-gallery-container').innerHTML += '<div class="photo-gallery">' +
				convertEventObjectsToDiv(photos[sectionIndex].photos) +
				"</div>";
		}
	}

	/**
		This function converts an array of photos into divs
	*/
	function convertEventObjectsToDiv(photos) {
		var returnHtml = "";

		// Make a div for each photo. "Randomly" select some of them to be double width.
		for (var index in photos) {
			// Escape quote marks in the caption so the modal function doesn't crash
			var safeCaption = photos[index]["caption"].replace(/['"]/g, '\\\'');
			thisEvent = '<button onclick="imageClicked(' + "'" + photos[index]["picture"] + "', '" + safeCaption + "'" + ')">' +
				'<div role="img" style="background-image: url(' + photos[index]["picture"] + ')" aria-label="' + photos[index]["desc"] + '"' +
				(index % 5 == 0 ? ' class="gallery-image double-wide"' : 'class="gallery-image"') + '></div>' +
				'<div class="caption ' + (index % 5 == 0 ? ' double-wide' : '') + '">' + photos[index]["caption"] + '</div></button>';

			// Append it to the list of divs we have going
			returnHtml = returnHtml + thisEvent;
		}

		// Return all the divs
		return returnHtml;
	}
}

// Populate the modal with the clicked image and then show the modal
function imageClicked(source, description) {
	document.getElementById("modal-image").src = source;
	document.getElementById("modal-title").innerText = description;
	openModal();
}

// Close the modal by hiding the entire thing
function closeModal() {
	document.getElementById("modal").style.display = "none";
}

// Open the modal by setting the display to the intended value
function openModal() {
	document.getElementById("modal").style.display = "flex"
}
