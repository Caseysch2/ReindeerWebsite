document.getElementById('photo-gallery-container').innerHTML = "Loading pictures...";

window.onload = function () {
    // Which photos belong in which sections
    sections = [
        {
            "name": "Building the Barn",
            "photosStart": 0,
            "photosEnd": 19,
        },
        {
            "name": "Hanging Out",
            "photosStart": 20,
            "photosEnd": 37,
        },        
    ]

	// The list of photos (all fields are mandatory)
    photos = [
		{
		    "picture": "https://lh3.googleusercontent.com/AIm3oYjhxEfFk8s3kA_hFvfzWJW4Q9RLl6u4X-QvcSBtqQ4Aa7E068dhaJ1MBHaUbMhjudVymQfrH-TWZu9Lax_WFogRkWTa4bw8N7nzW0UCjMAEaCnUEt-lBQCmYJS1Bm_dHiUM5ztOFzbze5Zdoj1Y7uSiSMteBl4IzrsjPMWxxz3bLeE9stSTHijw5afE56DGZ8bjaK_WyD4so7tsQ9HzkdeUpO9t4xxkmXFsKfS_QA03S_u09AaV6OIHAp28m9RwflvLbSbjtERzST5bxiL3b-A6EYomWnAJWHNL3S37tCjq3b8KR54OaRwKkcI444P456Kj37tFmSV0RqQFOTQmXdx_pggbvKVDIGua8AIx78OL_85FO4ryqH3eqBPgt3s-3UWa4xSzHqrZeNF8nGbxWdBFPJzvDBWPUCYvmcpMXHRzf8hr1KglBgmlwtdB5gRDI18fy5py_ddQnP6ucdYjxREz7m3hu3yqzWy22zcA45Kapsr3rGQraIPLZuM6pNAYFGFPRe_RfW3QAMKnvMBOuOvu0Fd3402Xw_E7UgnCbRfUZaSnUb7xP6GLzLyNch50ZqlnM2rSwvi4RRExFVFLhxTBzWL00EpUDrLL9cwB8ziCReBx0vougDSdaTq2BP673EBrx2z8XOurGkE_jb2AFenk5x_rMmikdGoT3VPaOIqNosOqY8pKmFOPSUu42NPB0IFRVm2VxDu7JNSNr45xjdWg1n1UigATFit39pJwAzMg=w1250-h937-no",
		    "desc": "",
		    "caption": "1",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/REcXpl887dBekdjFVM-4mtJXyuT-Y_cXejgk8u5OQ7ibPSs5Pwg3Qn1q6y9tpo4VdPRqEAUpBe0TGLU_KOLLZvQTgIUccRD2CiWEySVBtIKu20PMcln8m_kvHfSYUs8CmVP2W-zKB_Ytf4E7GiEGgu3uuodqmEIqPKjSbbRdcnpKya5rbThhSQu0SFu2I8yigE1KDCRVWv0jqFkn0D-b4MTq7vVN1hC6JKA-fNJAb5H1PHVLAM7HNdRkaBlE1_bU7BkhTTqs5vVkQKcRt_5Av88ClpA7PVeOULFtIGOKuOoCBxs6Hza6BkryRZxcOdvKk01mjTeSZYJYmBCdwonDt5uskxVuNmrEJ2q9o9YpbEk-XWd60scNk0f6rV9v8xhdbaLicymmkbEZrfCEyhzFXkc3TrRPvEkbUj6LmLZGX8We0r2ZSeWVF4xODb64YSvnnh1ebraLy-ylBfmTjJN01N5m9ejLld98uZe-0OdZeZwiAjHhIvMpCNq3XZAUk1rhRxeZKdf7dBC1hnqqaPUEiFbHWxk0HGjY9Cj3rU0HU0ZjyWdxVtx5ZZv3wHm_B2B0lJKbzsSmmJnf_FvAGgTeyzeQP8Z2LNyAQmkSUqGJH1cp-G76XIzrkmerosZ5y7sLzpZuYehDxCJKex1CTRM8_QnjAork3wz7VVYx5Y6LhrGLeF9Q4LlAiL0F5IHO9xlSmoolVxwkbx_VLgeyr2ENybf5UMdoUpaGUFjU9xkeg1RADck4=s937-no",
		    "desc": "",
		    "caption": "2",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/KRP2NSDhVMEjB2N586YcqxLUag-AQAeedRfy_0Om_XXeKjiyDaLb9HBJi0tXglVvfyrcljEta3gCoVU4-bC-DHic_2qjIbDpRCUiqb4qEQPASJlIEZO3zdljnq9NY_rh2NU1QgejtVwFYNhh4B3VpADd0ny18_CbdCqEjh5drj1j7s4MUeS4u4eQjmWgu-4wawg1UcDoBYdLeBvGJmeRodyZbdNGR86j0h8jiPSCF5b1PRY3zkJ21jB26nnbFGwVLsASut9De0G70LiOigIpR6fsE2HKsJu7hOJvDC7SmpSMjcr-DAUXiyzI6iRKzi4UJXm53NHDdC6wRs2ZjtYs_bVwt8PpjaoHoI9ruqpQtNnxmNTSACwgIz3zUZmIOYXC1paGGFhG4RxFp68Uw63ERW3kjMBk56iO7GDxklklkMciRdmHwbIs6SBhqgoz1ngU_AzD0fxow5lwzz4JYg8_9mtLaWr16n8bwTQSEIgpbxR6EkQov2U5BncwD0pIlnRHSXEC0vbcSUk7On7DdMvltrfXy_jAWWuckZF8DW-Fo765g3YQJtdeJRYpb5yJImiN27w2KDREyzKhZkOZ3hF-ybDhAmn9qFg1qPGMJ7Zq1CrUG9Ir26XJmYnZ-FDyhe8X3CDckS1rrc1XKfTNlAYIkFNvmyijx8z4_m3Pt7U6-GfR735p0creCRK81xJtSKLj4V7OhNi9-CUlTP3ddbBg9aYNC6Nwoxe4LLp_dbDFYXohVJjD=w1250-h937-no",
		    "desc": "",
		    "caption": "3",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/zp3mYxIOkaeE1Qjd9bwCeI13lYNzgCxY3U3ZuvTjmIsDlRYU6sjVOML04Dy_NnIJuM250zNhhS0UqMMH0TfoVp342TUQAex_TUPzzZMMUFUVrCUzJ9R9z-hZ5Dc7ADwRBWQekrQqN1nVNHhHjhrEbZhasMuXOgrPlIleUZq7QIfLHmtlhBeSWbjz_sDjm514IaMX6-xh485ReHznD2g7hgzZYvGylciBN89f6mS_vQEo8DrE4zegN2t-qF5ANXk3vwByYgqBA8vEaV3hkPrrOZ3E_kF34SeE6CKqd5TL7T4CEfzg6LBEIP6VX-l26Hu4FZiWRTyfPI09IQBXy-1qllfWh6Fb5YDPxBL9rmY3aGBZHVMPa3lUikDitYp8N-LkQb5E3dYwihOdEJ7w5QvgmM5s9IRYVJ2VpN-NFhPeSV-74CSMiOhDiSxQk8Xw6BOZ4xyTAjDJ8EADVVYDokLeKEn9gmbEQs9L_ugTqr5x9ecV8pODyRMr7mmlXNjVdb9_FBgAXhMuIFPl-H_tw7Df6l3NwYK3kERwRahuuccp7qk1FXwZdsXkckFOqOPq88a8cnjFy6xxnZffMuCTJO8ULMHi0AZj8JR6fQDrZTiXde5uOAxobCe5-UGwLtI33zfTxMvcjJ1t0AtNgbTSJrCZbIm5ujwiJ_c741AF9Lx1bmpsXLCFmFu-KvIZEJulan8okPJyQKrqZ4ocp1Q2AVjwz8TddrvFePF7cvMJRprruyYcJ3mt=w1250-h937-no",
		    "desc": "",
		    "caption": "4",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/egWRJl1NMcgUMs2vZ86vPzyB9QAX1IihX5NruLVjMKbDW5Yjn_auiFN1dftTVSyKl1zY0kaQoCx9RedDGerIrRzRgGkE4BloL0JMINF2K4s66bEayHW1NiE7ZowOHdQedrua__i2UkZns75wZ0qWUwodLgRqOGcYPEMrrmY-iPodem73G6zut8cV6t6ym-uUrThqFMVHck8Vaj-H_ypZitnzX1pM3jyz4nbquSKycoAVrGeWuRuKdniP9ktt3SK69vub-clhwSYNkf8lVQIWQrI_IDGj9e4lFULReHN8E8GiZ_UMALuLhpZhvydDwUomy9tjkcilE15P302gTP_7KFO4bWPrmONGUWCOWxtv6IloXIFtOx2NYnseiZB1m1rRifB3BUuFJXdUeEweuTFZ4mcWeRKE1N94bzlq6fqIDRH-40GylTlhKDwzkXI2MQbqakpL5rV3ILXqN_lu7mLeB_MkLSTVdKs-BRjShWgTnC8pU8HJy51q53TwTIVi5ryXeJGHjksB6N4pVGRcMabo27wAdr1nMV7dPyxP4PwMyEqKYO2ixs8q3aAujentC-aAOVF4OhPeBr6B8kSTPMRn0neLhnveLK_yxnhgRgI5Nd6ux919Pj8k5e5IYhLOn4HhmsVzgjC9KQXemGnEVVG-OdAzyzn13wfTnSCkUSWNfLjaUqqDwGiQJMGkW7x_mnbRucJeelrjO_aA8F242-dgJj4N4nYoRtnXQJFjtlSc50TLl9AN=w1193-h676-no",
		    "desc": "",
		    "caption": "5",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/H5CXJZzBsTgMHmo_T6NjQ8ebppKgnZfqlZI57i2v_b3tcy0aZZZitTk3efMZiGh4jOcfPQEOxFn1cjTYtAL6S-3OIEUL_6wXKWb0rk0JjwrIC3YsCAsofKNbJbRFSzzkOxW8-NoSV2GPitNTGAGoOkt5Qq4D4tpFvfmyDPf4b88LnEexY6M5CP0UExinDn6rp2VdUx_Okj5RPtLfHltPEZZdlvs-WhML3fRbc7PRqeyAM32q0e4TyeLLgI6ujHbuk5CcFZyy5WIxxpVnzPM86DAg9zj1ziu9ecNLerIn0BOYowjWmHGBRc7CyLK0-gdw0lK7tJdhq1x5qxJiL4Obeqefc-_UXoEuAqaw-fWozTLwe5UIWEOfL0zFCXDjPl-5WA5RFtjBxSj3-ZhbHhPLQoXarwR0t36kZYe5bxfduOnI4PqGgPBospFkDD8m-ZXm9wsWlkUKrt7IWI6fXHXEIv724XYUNwFOZRGM8S7Yefrb0KqBOg4Ho41JmS06fReur01zmAdf0acHH--SpzXzgmwaSAt_MsJir5adjkkfdGvfiTooowXClBS-3Zz0yKmH59G83Eay0j-NOMoPtP2ecdXjTAIm1vHVXim5lssL1caz0xArINBNW6Sh1YaEZFLEkqqQPE-35rbwzMMtv4d0yl2LcRAMH4q4ruAn6vbZ2YjRXGdh5yA4suGwz6GuMvMERZqk4t7gQjTGJDxaF_zRdhSV8THOoVvlYcDCa1fnXrQ8lr9a=w507-h776-no",
		    "desc": "",
		    "caption": "6",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/Ji5XH90adfcNqURFxqm9Xllk2ZzA9sJCAx_4zQkEZzoPM8WkY_ulUFLyzYlZIJ5-9KKpUUJlcF-hyTONZD82FtHr-AFJKsvemLQC7XATPGeT4PJDfRXbUcdZ2Zy2grHRHlu2O6NX1YjoYGD3c1TU9NHMsZcjFau776I7ml67rExdOYUyR2mclpLtDP5bBH-cTruhBR__H18P0kt46DgTrdz_68wtCNqwHq_bBbH9dlGQfkzF2O0WI3Bi5U_tDVbQpQyDULKDVvnbDVRoo0SyIpF-I1HARzJDqbdTjAdOGZu4FPWjpJId1pMMphTWR2XtHgs1rBJoPIIVwpj-RQjJ69C0ScewL7WORg5udyk4aZc9wPxWn9K7IApTkA_C14iZq-dK5bvvw1uwodFvlc031IzKuz-UZzZ6c-plvSFMwqOwUvhNnmp_sdX-AUWSAPBvLdQ58mImLAdPPUYsc68ESXyRr2lIlevY6vszjZL-9efIp-4tQtYuA2HCA5e59SrubG5H-92YUQ65IHG9R9092BiF_jC1QpXXxUC2xrInmIP-Y_RXH89lizVHRDxn6Mj08pNulaISQLlc-Cj1KENUVIbTnnS98rpotlP1n9HPm_AOET70UVdxpIsBJyM7GJ_oDaPc_hx_GPnP2NtJpEM3dZiVZ6Wac2lAuaUiyGLVVpskgfIML0m8TID_t85n4fwnr_owtbORBWcEvEx3THuv4JPoZ5MDH0w4nSGVUJ-mzPmWtug6=w1199-h672-no",
		    "desc": "",
		    "caption": "7",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/cQuc1MeITNClHu5YEbu6wAlgnvkTrbG8LGog9AOjYdIxcHNfI3Trk3irG3OZ-W9rDCFCe52PCjOUPaO9xjN6LvsGYf3M0x0Hu29S4flODRLsbraPRvgh3E_NtWLiImwOFcWOsE9dK3VnwkLAGrlKFIY78kPCRKgtchQ8K3JQiL__rTcdTL0m5tk5CHOFkAF8r1iCGYIpZDNTYxZIpm9kSceBvdchYVSKrwW1LuqHw42BjtbkbNK5ZNjiA-I6ocODmWedmIHUwUDt-Hcc09A0yJfIfh505K8dpplnxutF4Pbuk9vOqvb9wbb-qjMj_oFlqAy8_QxybqiYogmA8SgSYq1j3XgMkCUJcAjU6PHD6VBuwjb6VF4G_6nOO0aNVGZvK2ZALWqrHvhFftXjJ_vSljXYfECNf5XUwYEIgT9YqbBz85TkY2eQw2ZMXVsfKP_XBDqHgkZFDk5NMQ741WMf_xri2nA9C1qZVAzRt0TEuK643UdWR5qlZVUyrrEkXfFO55g_M0J94uPBNnb9WgpPH_Rf87NemkmCl6q8OmhdO_r0ovWtWXauy4A3ffwQ4_r-fO7W7FjOaeepX2YRq5XI-vVXND4AwWc-4xV6dcUrN4H7FqatZsPyAYBNpnnOVEEJ15uZnV4wzQtX1KierYUZ7xe99YI7HChdQoZlz3GNn4crlvj5Pk65dYyFo1-1a9v3_V6zBq_GhTWYY_S6f2EUXq8k6zRWzuAu4X7QZvIIkNoYoNd6=w1250-h937-no",
			"desc": "",
			"caption": "8",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/aU6nAYBmyjraazdiMdwrKFddDPC1PIDlSfNs0aa553phyLHemQT0QTm4nL4mL96nBATPpSSnoZ0NajorRzMBYzayTWUf5onmI6GErhvdhBIWW6UECOri0Ta0Nq78F_n9UkHGsFvmL_IW9XCjgGXJghmU-6Xp8RqW0CXDj1gXEeni9eh-EaQWRIKCNPed1wnH4tckgrPDR9twLAPIr1_QPCM5fB103CZlkT1BMD9mhXkfz_Trwz-ejF0Gk1hpVCT_ljSdbYgR5-dRzxVCz6wAops3MqY6IK4gN551JhKJlPz7uzYhW-tD50yGbz-YVUodU9Rd0RaT2eOyXxwIdBVpcsHTLfSk4fu-LLfjJwJgvVcc6E0beK83cxiWEYsev1Am9VtvrVQPMObgsVWGjnjwJvaW5nhOkz8yK3mMx1XCZuAuJVRyq9sBWO6GOnqT3Rk63sLwPYcSs9uZ34gnOu7UdfOZkwNC85mi8F_5bXBCH6mlbJDeH9waod5qOJUsYv0dxm9LhnBa691VrqwIENOyvXm028ZM5uscdsGTfjn_E_8LBhKRbc5mht9UtAkNeW1AN8Z6pO7rqxOHfv09tnnteHo4RlNqED5p9JHFAm_xUSutlHAPsOAQwrrvKLr5bdkhtcMzeCp3P_EyKjzxN1HoN-9NpMTBRZBb5TE0dPM7b8_rqeQ_OHFz8ExvoD-5MJv-Vr_VNT7CPe9eT17-bdQlNrSLsWAQmSKHq1P0nQziuCe2ecmr=w1250-h937-no",
		    "desc": "",
		    "caption": "9",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/jojpffqulojqdDaHiqZrtS1_3MTbOXBH1IwNKZwIjexn9V-cnQdEj6DHudTMICoDSNrFdLDdXMQ8UKRGq_OJurzvXSdYUXxBE8SHQk8p0gzJH6dUlxBAYiKQbn9Op5-hqM86zgx01yLKFTj9iCfM5W9enA9_-72a8Figz8Ytv6hpD1QMHBzGa94ZVSoiyvdpTPpysGNy9dXii100fccseEzu6aBShpZv7UkE9iUKacUiFOGDQvdk9NdxTp_FLOfilA6NpigriuXL2GXa2X4rxh_ECQW6lO4FwaZt60cGDGPPuSTlCZiAxeWa5YMFHb00-oJUcHHbYJTxCrx2R6bRF5VdJGCDArsg5mCxpr2BUnN5n9zW32njBo8dtgY2S3ekrdDlFVm8DvGu2j8YN6y_X1sCgHv5z7bgD3NHjj4tnbhxpoh2pkH5WfFylsPJK1QnoDffyOFmnIeVyTot0fNrXRZnbpte7JyN3lZ10H45S3GdqqggpobkbOZLvmBCMimhZLfQluzfTmLdg9dCn31VWqrstl9kRjrPKjmKM-039UK_i3apH_CL5E5qvnV0Q3VSjA03YJ_QTJfoI2pIsYIzPt3-0-xxW7pnoGLyjsq51Qz_2eNLoqWmp_Vs7jUwCUMrGR8wBhaPcvR92ZtAkJXFRAeyw4ee0LTSEflreN2iVNY44WCyQHnZmgwWYK-Unm8WLL5ZPabJcQOl5UIiRkNeI1992wZnWtDh1YU7bgywoM_XD9Kn=w1250-h937-no",
		    "desc": "",
		    "caption": "10",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/QmJIRqxyhiuTtwxkD4F1mZ3NKLDKPi78rqIRGj-sB5lekWGZGFWji9xGWZ6XgD38f3R27KtcFnxwj7JkpoTGcPpyxMVQhS0vtuFrQd5iacCq08kGTXTV4y6hciDXqg5PEQ2culFKIVXXjurSaJBJG3gDXEwQ2QPBUnXGAJ19g6rgk41rhyuLs4nkKFSs7y8djWVPzdg6VeHtNnBnuzcQWmXmq5UgC3HNxu-2SxlzGGcuEk-zKNqMf0YCagzm1ChdV5Jyb1An7tRPxsPWDG0RrPJGgFWXb_7fPlGLdoICjAogfZ39SDBrcLknTdJSoT_4H621rtwvUjml01WNSRZh5As-fLFaXPtAj8HFRds2COo6BKhE0y_Y64bTlTqoEVUYYc3sT6hSV3hpeRFoWnD_M6ni_DTxVy5KkvXcjP7r8ECheujo9uHz3vNBOr5MrqOUMYGEsScORLSRJDg6Sf2d9bqnZMXy_iVc_okjNaG57Rl-iY3WMq8XjBK-KtVBd76GwtJpHd2H_mZtK8uYEutY0o4-GNKPW4fiDEwf8uX83TVxoRb8gfOkvJuzAfKBXjGpU8zEEVmcxUpAav0SHYBEd1ZumH5sIjs2KVy0GEtolhGQy7nslzcnIkJz-MZqeQO2YG4G9mFMTvFkS7JBo6j8eetW666b-tq7_IPvAGUqP_gClcsblujUN_rwWUJXoTbSvFh4Gt4eVXzKgqi0h9IiiWBsekWRUqacBiw1ez1rGboInRKn=w1250-h937-no",
		    "desc": "",
		    "caption": "11",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/nSxs-TZjSx-yZ2ZGNidJye1KqWayWwXrGksZ1bAajy0dQvcqUNCGeiIVJeIO6VmlTrz9a6LqqtoZabaTpj0s7KFFlhX6V2NxFBBtvDH3oZZ4YmkcOUS5TAtDFNQakDCmJA8sXgZn3Nk225t0oQ1RFM-QTbU_vQNj0hnRn7NySIvi04WVLGMbjQd_byTzMlsYV6F_tleMaIy1hiwMnTUuvVPZ5JPMQevffcVnGmLtTJfUV9pdg_Q5QTFsTKUTYzlyXcA_QOX1kiJ0GUbepWmoTtOMnMdkTeIKlzAa8OWA-7x9Qo7-rz0JZYGlJ_AcIx86pBY6P8bx2Lu0vw352qwFLfnoSrYARMokgtqVRMA3hFcSO1L4lg8EFNNyQ3kLN3tXxWiHEgeRL-IhIgj4s2PgdArKwwuMWzbMxvv_gPPH1U3AqXvFQEIz3PkNwdv4YvBM4ZKmFF-eJOvvMxCPRMXM-qTgy6ECElANUf0XhXsvX9KBDF8B9t1W5KJ23t1Ow0wUPDeUKgJ-2FfJZWnTgm7Pa2iD3I4E9SuSRqJ0bECZUFLkK4vVzv2q7zYrODW6-V8_Bz2k7t0iWQVuw_nI-0ieSw1HRUJ8Ia969WynOiQarQnjUhmzwsRHJ2VBzWJ5lPTzBKNaxzDFR0TDbKFM0GNXd195AwFBDfqutpiRf5ryG7sMNZEec7nTHtck-a2X3rN7Piwi8pY5OPqqbWW_OaoEVj5VPrU_mSkrjGQLzpPs2vnTA6XP=s937-no",
		    "desc": "",
		    "caption": "12",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/0vn0y6yocu6gLmTlREYL4qN-PkfKE18GeqksgNiEZmd2wAn8HUgjUzNTC39r3SDPdm9TNf5WzRUZABVR--W4dTm22GQ_yc5S3TuELRU2KxcNPhA9lc6M0VBoPiVbgKVrsJgiQBRgEV3Br24b2WFnefDpoYCrSXgJq91umFdcAWTLF-g8mkcxSO3k5t4Xtoro1cv953GMSiyuG68PJNyHmAJgnWj80M6tI7Tk44tZDWWEa2GebF2NNey7_6YVtdaLYcZmlG4XrDG62Wrm7zeES18XZcSScUblZerZNzupX7xlDeixEFVenY5lKEh6e-hXQe4jBKK_uLS1bfOiDEMHSx3v7imgQzG-JINfumoOQKCnUg8spQNIYkXoshs8uVmkxOYVVm0pHZRXi1QKKnCpgKPjSFW-0w2sIktwcPx0_L5X4kEO0flnti3EMsUk_VSubUWiXQtIX5Gfh32nDIphC6unLrmYPLWpGeZ_g1b3lpM2HT0RfW4CGA80iu5j2xez91kuu0wq4Ec1b2Y4N14wwYi4QvC1-5PN7Kf3BTurl34CSuM3k1Csx0twvpHQA7q2M5dj8dtEwxDUAFj3J4TpSr8KwX2u0Y7HO6Yodb_XrC_rUuCbUCe5uLSEy4MdKImS05DiIaoQajgXJzwbtbpuqBs_VeIreR1ri3YgA9C3s-s907mIoTTXPFixIX-co-ItrumDvxMXFk3k1__HizZYLThf_m-PSJ-EsjTGIjwzcmSQ6rNu=s937-no",
		    "desc": "",
		    "caption": "13",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/gWnvY8HB2sLz1mn6rldtL6BporasZ6oPTmt0mJO70hJkuinbjBC5KFMxJlND3QBrjX8VKqIDTct7P5fKuc2b9rKJnFtVaVB7-yB49V83VxVMjKDxfwjNHOBNSWL-Fx9eMZjwPzYqSnKM-ZBcGPBI0G1ozh19oNmcj3z1TUKjZJLamOJVrU3tGSEmX_yRlgUDu955CmsMR8EeS0FCVI02-J_DxT2z6gYhvvJAnzOyZy4nF4MnV4TUY_FNBTJC6xKUZsLFL0otS1gZsTUkdLdt0-W50yy_pid8M19MShn65iWnnw8NJ2uP6dRpCdgR6pgXjotD9v7UAU1wrrUIEt2Hf3X2qV4MjNh2YiRcqjCe5JF9sRhOPS52qxINpS1We53KqyZDmQAa3nz0GJBO1lNyECWRiv-B3siYwTV4mQ5q5KAsFnoQcU-B6aKEdp9R2Bjff6t8rDLaxIy5uyKF_pxyjL_0hhue_v8BeikKo5ZHknOvAXetHDFroviLXRdyuDAH5fawyu74C7uTaGNvsp6RmWfUribh-4FPeUztUTcVioErEciQk1lhs6cn_PCXlWQhVQJ3gqE8Tr7HRqoisv7R2H6gBT4H6doLjSJCfUhikIy8vwqHQ2pDip-5Ym8r0WvtXqOPZltxRIxHN0xHdqUO30ZWOo7dg1j-nRXKTZo8cRNY67oGU9sAJUt_LwKxTAAYiCSjFQ8njyhniHz6YcebZ3FoEz5ZiQq6EIyK_R7eTvL0KydX=s937-no",
		    "desc": "",
		    "caption": "14",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/svI8KSBCHRI6W3XXhjticJ1xd1akoVwtYTxfgO9PAvTPoaDznRTdqE7kwfYjBxiUYSa1AosAIXR7zM-jA8N7VGt1wig3YDYErZ4Uo1EVayFA5w653RF78kzYUWgxln57xREgnraifvTksFJKPIhTwfv5IvwEjrJ6J0aCKxok6_XWFBHaa3guvU1i0ZdnICiZjY-QbEGuljIaDGkwMEoGsKfwAx3RSMOwld4Y7hf26I4zOyESA5JbvzdC7CCQ4UaEF2n3TZhlbULYcsp_andkHd8bGtt61Dab2gIPeCBzu6qXt7weGZcSKah1l8xEupeiSV9Ta3ovxoeeJ6_7uOdmhyPIeah6o4acoxV81WjfHrV7FDR985G6o4MR2ztJJx1RJ4GMzy7zGDFT2EV-1TaLc1kqpS64WIa3K4AhpfKT7Re6NR0fMX7C6mj6eo-JyZrmbPOt_RdIPKrE0DkKGq2yLXpDlvuTALPB0VRHX3i5RUDDrMit_UoQDeLp1CUPcyqGoi2efTJ4Fe3TX0ggk5xQoSzJQ7dP3a2bOzV79PbOPBoyqsv-6O6dxqwDDLUfUzEEOa2XZMz-4-dv3aPe5ol9XQzbX67K0RFVhcuBtnaPWUenShMsAkEQUX9A_woa-3D1rOOgDNHu9IHD68pzdbE_ABcsqlGGSm1_CqMrMODurWTMX5tC5tCACdvuszJod3kq0itUc0-OB47xLphz3zo2QNV8oQcRge6M1Un2qCv8rBqKoD62=s937-no",
		    "desc": "",
		    "caption": "15",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/hBpHMHP9LAzb1q1NWyxuga0H8BIfxEzW2pVljekYJO1o_O29uNyTF7Z6llHjFuHziBzSZyVw34GG2u74RYg27AM-O8VbggQxHnyLPNysSFUvrGr9OoO-lFirmGWo_cjDzKmb1iKa1P9Nte1Azs_wxdJwc3a1VBxlDlowtcIFr40a57rqR5HsUvTQAq_TBMTD_Gdrnbclzun7-GZJvurHmWT5LcehBggAj5JQG1vzcpxFs5PLoCeq2PBh8hzIOtPsn1odTO3-o43XQ2v_QfLjLPUhkkjOaG4-rMuUYBi0u0UGetz2vGSbcF3cqq_6XUJ1pmBMgxKS760zXNXHMlDbecgDQ9dxFCR5FK0UYKoQfd6-ZD8dPUPcTgcyOxjxdUoK-_6AgS7BTAA3W2GkcS_vzxeUFjtPnAwgvsMF1qwwBUNpm_0ZijZDprCTy9ShaR0sTUF1CDdUY0ZMSuyzSxUW79A1Rbd__ooGJrcqap3UOylzWJ1DXD7zQu4iW1do0r_0Z8Nz-XOA_MC0B2Ed6rzxfEvJcQEGYQ0dAPj2VXGLN0UbMmdR4AE_MtVt3NVfSOHD_GI7qaFOSZuWULLdzqmIkurQ7Z9zjmZvL4WSjZlXD47gKOci3krpC88xfFuQVVSY5aax6Wa6C96idwgcRmHjnAiiH8_6JudLD_GE6y8Xb7TZrYxpSQuuDAOrZkOxlxm5ytSvS4XruNuVb0HymsWh1QZP0ODvDGXJdbIIa4bhGzBrbZ8A=s937-no",
		    "desc": "",
		    "caption": "16",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/c3vna6E8VQ1zKm-60CHQ_yd010xuBiFlAV-xmTFK4_9qH_BrNu-cZaTlZMFNiptjAID4GOVEMOFp0SC8dqi1SgYxSe1kEEA77OK3G3IUOi6x55UsDVaaIdSwmjBEIo9aVSRnxg-pp5SJCLNtsrJhLrJtlcg7sSKI25GQkFOoCNsly_czEiVB_FJqp6i1XCBJS7N_bzmeoYY-THRzBv6eWleXWTkdqKyR-3Wd7fHSfCz2hU35BUHFP8EDpaf0tejT13xc_fFcyWZ_JyEvsB3fTcbU1bO2C1LHpa3jjXHeBuMsuzhLphFwMNA38_YeeGeH9BxKh9iZIz5FauDbm0CQ7VrMquu_vxze8sP62Mzsj3MuyKtZAs1nqW8kz1bvUv9cqFFD31XrVKf6pElvxwRwQFl1iwsfDCFt-Kwi6cKptCowf4sYduXTrL_zg1x7OsNxMyqm1H51VM80Dpr_BktKxesPOMYOQ-fBsfiYnFobLs8zDo7xki9j0ZigGtOebIfIRXsZ_YWHg910HxtCb6SfBi-zopjoY3EMOdzVL65WRJoKm7fWSEYWyyIGO5c8cX89REbXyyMBz6tuKjZcMv-bWj9BOyDY_ky3qtoPLofe8Q_S74LBVLIF9DlcnvdeyzxXHZ4FLYCAGz5dlT-dc7ZLppL8QpSci5k05JnvgoHeYkFgPGEZ-JTP1wnt_B6dlILXLucRZC7RK_dn7GV9f_yd-OoJS68yimag3ZC8YRC7hxYqEAcg=s937-no",
		    "desc": "",
		    "caption": "17",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/qKrOf3Km0dH3G6yx63_ZMjb3NTpHo8ORNc_18AvKToaQvplh07Yr5JB04KLGB52IvvLDYIZ7VDhmvtAB74Wzz7U-3K5cew8aMyFwaZ7GfYPLo2-BLzD3s1c7spkyHgLCsEqT8DYP6_rri4XQpH5GPn42plR_F0Qje00u8TJLyIk3zP-lKKRV4QnixtQLG_WIjIP_3aTnjgz5NLpN0yB8w-AL2VvvsiQB0Fz-e_Wt1pCcRZaJrVJvWdnBoz2gsytj9Obyz2jZYA8eNJveP4nB8cOs4lYuiWZnH_5pw9rbk5khVCCnozrnp05rPdFAwjuSboPXTdZaJ3EmMlsvF_AvvNJ8Y3Uas-YTw_3H697CJkiERI1XpctXGQfYtSfpL3Y9UEhHZf3BHGgsu5us9F7GqS5JRMaiKr0qo6Ji4EoVcfneeFoDVaYQoTcVngltudOD1_fIcu6AEA0wdtyYgBFIFOTsmBzEeVWNqsgyw9ypzaZ1MlrLFpRsa6K1zsPldUJESGcAHJ7tsTK7C-WSGKjwycnCKUTUC5Y6k2cJF9nWWu4RcKnBGARNhC1daCkLFgzOoRiEgsJPVPsi4B91XsABmUdj4YqR_aCdVMn7IaroJ94qrUzE2mvoj9qTFIPoAca3IJN-Jc3EuGW8uHGPelRYJC-U43UNB0Hk7bsrJuZ5Bs81F2D4e9w6aVwIv2LDl26w_e2I-G2DilSqlzuc3PUo56LqA92xPkf8xURkvdxVpB8mdgMa=s937-no",
		    "desc": "",
		    "caption": "18",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/VlN8TfYdMgR76l7oeZZu3tZXd5J5Gnih2U3eJZ4FjWiedLf99Wn1swqdVjmHRBZOlPreSFW4x0pCL1YVYEJ0HoNuIJkgQ9OOVp0megNwu6RlHSNLFNCLLb0ElTHaQ0dmuM_XQ_rTjZfiZybstRoIfAd4YO1cKEOkzbbG69o0bETRisRrlCaeRe6dISSbRAiCR30gHtkGSupBi7BuLbNtyRizVUuTyOzoAddvNj48VrcbQ190rTJzhPUq7u4MqqMeGbyl9buI1rDWN_PPVXUrC6_Ql3KQ6Ltv15a2gpB5ORDwSAh20qM97mhIkzAS9RZkOEGwsWa5C9iJKL-SNMR1WBD7jymXx05KaPfH_33YJ9EWIsvxs83hEA67sYxgS2KEyNGuNIZ13Kbl2Ahd1mpzqO6Vy3-rJZzzhG3dJPNMrI7uzpW-H3TfezC6etvOkMrTOr9B_6skyKo58W3SXJShwvpLewjh2RZZVfrf6LoN6DNGSG-suGYNtdvXexHF7iV9dc5epmCoMmyx0Y5ahHLot_RRY9ILUevREA7W6C5cZTT4KjWXongYCTwIdM6y-z1k7be9NSG3DOBAAnTYN3dAvUMzRRUhj5XF_-NiZ-8Dnh3GrHeiz257c7IIKOSGqW844OBbNhsw_J_RWqaKJEouFHq1dcJRyRmyc8NRR_J2r-WgIFcMWSCQ3kGIjYZswWYeGJeueuyGYiZHUwuoVVPuI9HJIH4iJZ8u7hR8beoOFdyOShgh=s937-no",
		    "desc": "",
		    "caption": "19",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/0z8Gb82BANWi4NvGXyX41acy2TG3seNIALWpQvOVU6cxng1HF-ZNRKnHe-N_ZEsXPzWFRZuFvI-fvwKEz5SCt3zN3hUeziuqr9RoUYqfhihoirSv7k-igHG0E_GwUpbip1FY8v40HVvf_5mx7juK_InYwYyV7KUFi80bk8j-WsBWm_S0RcRDPFH_w9uilyjjhotutIl-XO7VfIaUrelLGzUgcHOgeUelxSrV6ZhiL5k3yudQw3C8zaKe1zyaTFUJqztpjOAvs80mZV9pnuRYcYPt3KnJQ60pFvcgSL2iyL45v6SY6HlbTb0ER15TuJv-PrG7N4cuHJMlcOpCnR_YbNkdTmUC5l_D3rGt9EThfpZ4b2baNAtQS9VQVWYpNQlmsSvPuFtW8CcKPJOIHK4sEP0dRQOMnNwMWEwo-GU1BFrrSHbOD-38VAiFAATr0Qxyb7CaGHtJGY1UhoUn4XL1OzTQ9VQcbokSgavf8ZAA58FjdXpSFa_zJMKGDWmUx4sYLIFaINekTJyvE0HS-7hQeQhG6NGvFeU3plsgM5xMt_3npoWhje61KofwPzmMiT8Uv99FwtOMnNiZunBqYeVJHEkr6rHNZJViZ9IOSObMartt3t1AJaWSEr3vJSgQRMzK3Rhz-gaN1iRM46GD2qFAzuygamKzyBFpV1SXgHhBr5xlUO8b7pUnfXBEya6jHbCYnQ7jy759b32oKxoo8nOy0swJdIZT1aAYhYEd-ceEaxmW83LV=s937-no",
		    "desc": "",
		    "caption": "20",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/0z8Gb82BANWi4NvGXyX41acy2TG3seNIALWpQvOVU6cxng1HF-ZNRKnHe-N_ZEsXPzWFRZuFvI-fvwKEz5SCt3zN3hUeziuqr9RoUYqfhihoirSv7k-igHG0E_GwUpbip1FY8v40HVvf_5mx7juK_InYwYyV7KUFi80bk8j-WsBWm_S0RcRDPFH_w9uilyjjhotutIl-XO7VfIaUrelLGzUgcHOgeUelxSrV6ZhiL5k3yudQw3C8zaKe1zyaTFUJqztpjOAvs80mZV9pnuRYcYPt3KnJQ60pFvcgSL2iyL45v6SY6HlbTb0ER15TuJv-PrG7N4cuHJMlcOpCnR_YbNkdTmUC5l_D3rGt9EThfpZ4b2baNAtQS9VQVWYpNQlmsSvPuFtW8CcKPJOIHK4sEP0dRQOMnNwMWEwo-GU1BFrrSHbOD-38VAiFAATr0Qxyb7CaGHtJGY1UhoUn4XL1OzTQ9VQcbokSgavf8ZAA58FjdXpSFa_zJMKGDWmUx4sYLIFaINekTJyvE0HS-7hQeQhG6NGvFeU3plsgM5xMt_3npoWhje61KofwPzmMiT8Uv99FwtOMnNiZunBqYeVJHEkr6rHNZJViZ9IOSObMartt3t1AJaWSEr3vJSgQRMzK3Rhz-gaN1iRM46GD2qFAzuygamKzyBFpV1SXgHhBr5xlUO8b7pUnfXBEya6jHbCYnQ7jy759b32oKxoo8nOy0swJdIZT1aAYhYEd-ceEaxmW83LV=s937-no",
		    "desc": "",
		    "caption": "20",
		},
		{
		    "picture": "https://lh3.googleusercontent.com/0z8Gb82BANWi4NvGXyX41acy2TG3seNIALWpQvOVU6cxng1HF-ZNRKnHe-N_ZEsXPzWFRZuFvI-fvwKEz5SCt3zN3hUeziuqr9RoUYqfhihoirSv7k-igHG0E_GwUpbip1FY8v40HVvf_5mx7juK_InYwYyV7KUFi80bk8j-WsBWm_S0RcRDPFH_w9uilyjjhotutIl-XO7VfIaUrelLGzUgcHOgeUelxSrV6ZhiL5k3yudQw3C8zaKe1zyaTFUJqztpjOAvs80mZV9pnuRYcYPt3KnJQ60pFvcgSL2iyL45v6SY6HlbTb0ER15TuJv-PrG7N4cuHJMlcOpCnR_YbNkdTmUC5l_D3rGt9EThfpZ4b2baNAtQS9VQVWYpNQlmsSvPuFtW8CcKPJOIHK4sEP0dRQOMnNwMWEwo-GU1BFrrSHbOD-38VAiFAATr0Qxyb7CaGHtJGY1UhoUn4XL1OzTQ9VQcbokSgavf8ZAA58FjdXpSFa_zJMKGDWmUx4sYLIFaINekTJyvE0HS-7hQeQhG6NGvFeU3plsgM5xMt_3npoWhje61KofwPzmMiT8Uv99FwtOMnNiZunBqYeVJHEkr6rHNZJViZ9IOSObMartt3t1AJaWSEr3vJSgQRMzK3Rhz-gaN1iRM46GD2qFAzuygamKzyBFpV1SXgHhBr5xlUO8b7pUnfXBEya6jHbCYnQ7jy759b32oKxoo8nOy0swJdIZT1aAYhYEd-ceEaxmW83LV=s937-no",
		    "desc": "",
		    "caption": "20",
		}
	];
		
	// Put the photos on the page
    if (photos.length > 0) {
        document.getElementById('photo-gallery-container').innerHTML = "";
        for (var sectionIndex in sections) {
            document.getElementById('photo-gallery-container').innerHTML += "<h2>" + sections[sectionIndex].name + "</h2>";
            document.getElementById('photo-gallery-container').innerHTML += '<div class="photo-gallery">' +
                convertEventObjectsToDiv(photos.slice(sections[sectionIndex].photosStart, sections[sectionIndex].photosEnd)) +
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
			thisEvent = '<div><a href="' + photos[index]["picture"] + '" target="_blank" rel="noreferrer">' +
				'<div style="background-image: url(' + photos[index]["picture"] + ')" alt="' + photos[index]["desc"] + '"' +
                (index % 14 == 0 || index %14 == 9 ? ' class="double-wide"' : '') + '></div></a>' +
				'<div class="caption">' + photos[index]["caption"] + '</div></div>';

			// Append it to the list of divs we have going
			returnHtml = returnHtml + thisEvent;
		}
		
		// Return all the divs
		return returnHtml;
	}
}
