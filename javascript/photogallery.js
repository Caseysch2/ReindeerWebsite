document.getElementById('photo-gallery-container').innerHTML = "Loading pictures...";

window.onload = function () {
	// The list of photos, grouped by section (all fields are mandatory)
	photos = [
		
		{
			"name": "Photo Gallery (click or tap an image to make it bigger)",
			"photos": [
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczNYExN1crFmDNaP5t_3tqHgEMKFbYOqzD2l0p4UCD3ASNxAfHW3QYdQgmo69kT9QOX0v2zu2b_ZidphhORsaQgyTGdX0KTiVf8HsVo4nQLLqLcAOQCwY4-ZOmYNqBN-xSGz1eRjC7rLLV6IfsGasRcA=w652-h869-s-no?authuser=0",
					"desc": "A baby reindeer in front of a hay bale and green fence.",
					"caption": "Spring on the farm means baby reindeer!",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczPJPwRA0xbdBHJftVctbVloacXtjdiogbxSOLqh6kDwPUR9eeueyNlylA6ti92v-cZ-Fth0a-pj9xEtLG_Aq382pc6Xhs4lyVA1GBEMKR_2qQgVqRYumileWCK5M2nfdo1NugtYF4dAWblkpwX6ll7l=w1087-h869-s-no?authuser=0",
					"desc": "Two reindeer being led across a green lawn by a woman in a green hat and a man in a red hat.",
					"caption": "Visiting the VA Medical Center in Bath, NY",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczMHKJyVIlnQThTddSBRy6GHxrDKNTnmc2L4ELX9W0010EXP1KSIDWUu7qddP27brTWPmCxiCWeZJih9iNZi4y4XTqqQXr2atNw6sCE1iPYFlFZX5WwJ_6_NhhqG63tEs4eyXfA20Es0ztaO0jnd4eb6=w1545-h869-s-no?authuser=0",
					"desc": "Four reindeer graze in the snow in front of a brown octagonal barn, with snow falling.",
					"caption": "The herd enjoys a snowy afternoon",
				},
				{
					"picture": "https://lh3.googleusercontent.com/7Jj803cDJEfSz9K4VHEbyXTQ2j5oH9yHfcO1i0zgQqt6tT5GNsLCcg3cL7mQ1iKJmaUBf6OZEqJj1VE43hTqr3mDaND3V2DzILOFb-ScQUFIFZp7vRZyqvAdBSjOqzOkQk2mJ07aPodsoynAdA7cQajJwQx_TJrQOg9spk6TxlaLefSi0QQKJ1G7M1aCXA-gSxfBSmpSzYKTWwKQQcKm97uuG2YXb0f6WbIoWCFiNIcNjUIflnkAmzn9AmR-qzR9I19tUnusGpYrc8khKZOej3tuYQhjPyP9tcOkHLG01YGCMeVNBLqp8138afXKiDyaqmyVjeLeXyfresrByg-53RpN2QtwXL6jsFZtLSoLtaEX8wPVD7K6ZEZyl1Mhir84d3mdHSrCOelTxt1YajDxYRmuIKv9-k0FP51IbuDvq9Ny8CpuD0TcnLKktmGSCZp3TXCrzZGvAPaLdBEfRbplo0Y8UujM7kPYmh_S64ZnizO-pLwHlvEDYdAB9D9zda3CHs0g83h1uL9b_8DSyHsL1C7h1w4jrvKUqASHzgezZaJDCBn5UeugGuauFK8G4sr78bw2jLA7Wk3DBagpwclsY798j0mjHU5fsCfn4IFWrV630_Y8BHmS4ebH13_3giPzFXWM5CYtUng2WwbRMN1QYR8HJ51tbPm2oF9-8Hce48jabktdznx9Hb5bYb0_Jm5BMqGTRpNT729_Fd8VcItMaJ4zlhxHbzOK6wfu2xDqdcYG30S5=w1406-h937-no",
					"desc": "A reindeer in a red halter looking at the camera as if the cameraman has a treat and isn't sharing.",
					"caption": "Yes, you're beautiful",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczNsjwO-aq3NuWor3mJQCkl-B1t5EMu1Vy-6UFeJm90V9k2klN2pBF-QYON_EPXNN42jU4rc6IdG7J7_H2oxcJ9SrsMyhHNr9efsdXUGdDf_uMbHGSsWsDk-TxV-qVKr3sCHnSdiNtBD99jKA4f7mLNz=w1545-h869-s-no?authuser=0",
					"desc": "A small reindeer with one antler looks like he is about to head-butt the camera as his other antler lies in the snow.",
					"caption": "Reindeer shed their antlers and grow a new set every year",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczMQCGRgVII_0q8mbS3XiXIDbzxOkh9-jWV50h77FTLqShKrh_hdVDpCiRwCfa6idCV_l-tadqLBll5HK8fdwAEgMHBUb86V9LUItCAck2jb1S6etj1H2mZtJpb_L0ksEo7QNPxUXigAwC2fQtMZVBYM=w1008-h869-s-no?authuser=0",
					"desc": "Two children look at a reindeer while their dad stands in the background and a woman looks on. It is summer with green grass and trees.",
					"caption": "Visitors enjoy summer solstice with the reindeer",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczPprvZ-tSJs0j71QCPw65wz8dyJlE2vA2uR77BMQ99DOJPIkkVPBNht__Q46u7aJU5W-MvWAUPvENi1c8jsFgG256Kt4A-8norqeUBnh1qW7R1-spCNUF8QzKhBNBP5M6_3Cou7gQ9PXKrRIDllpCkI=w737-h869-s-no?authuser=0",
					"desc": "Two reindeer being led by a young couple in the sumnmer. There is a pavillion in the background.",
					"caption": "Adding cheer to a Christmas-in-July event at Lake George",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczNIWuPSFZGvvUI7RpQ2SNATt0V3SEH3r8LYW2wIAhtRTcwbD8TNZP-i_LOd22cTCZDp0hpHDcdQU6HNbs2D6GSb5WCbexdlWh4--Fx88Z4mrSLzqeSgIA-WY_XPgQscUx5RLKlku3v5Lq0gko8buIPL=w877-h869-s-no?authuser=0",
					"desc": "A baby reindeer lying in the grass with its nose to the ground.",
					"caption": "Does it get any cuter than this? ",
				},
				{
					"picture": "https://lh3.googleusercontent.com/2NU2clscBi0Cx3uy85tEfj06-IoV1y_huDe1d8p78KerACbDsIJv0nSjxpN2pm08BJAYZeZdtnvJcfG5P7dNB9K4pZYO_ZflIlD90KO7wrybZwBiRlQgZ7__gkAINtulcjnVABeLvMpRsMuHoC8z5FLoI5u2pz_9H6mIKg5_6kGes3qm9xFUpb1uW1SBfV_eLEE8IvM67Kbqc658je8tCcP9jEr0YuHWqkGDQDPIiDMtytR5BzUsRr0qau3iygo6h7SU7nNhZPzikoTe61Fy1JhKwSH-3UEntBb2gTHNy5hgmh-MYY-jXI2VlpFj6l6m85Y8BKAD1kDMrraeHhiH1s0v4WQT4othatSPPyh6GOIsxAsuFdX1HLRrCBaWEyQ8NDMXOhSqZN3cicwozLNmFLa6halEJ0E5zBYuinlWaNiGtr13xX9f8tGD9vLZz3XKU-Td12AtwhSY6d_qreUGp4gI1FNy_QWZ9DqMcQIysT3nUOI_JAmFF02p81kcv_15iMcbrsPLNshihLKJy7KnFxDixMAYHySZ_D9-wumGAAD4_lZKxeQ0eaYHJ6DrywIc80-NjovArjTgU13tLmQ9w-j3nV3YWU_r616EEhDxyBFmukyXK-mXFvWc7t4qpciFjFt_otdykZBJISBJjFL_Yi6YBQjbuoBqwDqVS6iGiYeEh6g8kiT8i3GtDRUX7hQYV1KstW9oEtgLLi93wiCwciuVkFecLI2LXOW31xG3Gr53cf1K=w1406-h937-no",
					"desc": "Two reindeer peeking over a wooden board with their mouths open.",
					"caption": "They laugh at my Dad jokes sometimes",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczMh_fslNFT7ddZTmFVKTNE4jaP0NuJZz3kiD-063e-nNE096rZzc-CZum_Kmdc8gpdjEU1cSEShNoJ3LbgvepgBgZIhZ4_SJPrObE5yX0xgeWLMQlV8nnEHDS5Z7BJ9Tyzt3t_RPjZMx5YXApLkcbF4=w956-h823-s-no?authuser=0",
					"desc": "A baby reindeer with his nose to the ground while his mother looks on. Spring grass and leaves, with a forest behind. ",
					"caption": "Our newest reindeer calf enjoys the spring weather while mom supervises",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczMzx-jR4DVCsMbESV7y7nX1aTM0FUrs35ImVK2Q8EIpZRzK4AcmRxumEKswE_eDDsin-mHNKRyn4_2A9qgvvjwFn0a3VN5TC6qUehelaf44c7076hMOSHIcr71tyYtWLQBq-o9rebiWzMFw04Bz6p42=w1545-h869-s-no?authuser=0",
					"desc": "Two small children are putting a tap in a maple tree with the help of an older guy. The woods are treeless with a bit of snow on the ground.",
					"caption": "Visitors learn to tap a maple tree",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczNJLRoY_09kUJA27aITvX7v3hxCh9bCYYGiR6A4qXYWw_KrFfassPfbWqHAFcxrJ78nPW1SYxhrlMHoc8mwvxOJdQ6DNrTu03DdDeemGmTblF_0k7oB0ygVyeom4jslZkE8oDGBU6FdyTx1Mi07puqQ=w807-h807-s-no?authuser=0",
					"desc": "A reindeer, a sleigh with winter greens on it, and a man with sunglasses, vest and red and white striped scarf stand in the snow",
					"caption": "Calendar photo shoot at the farm",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczM6ToEGLzQ2aQ4tvIeHAzCEpu0EWZxNtKdGfugLJZduL_v4-5tFy1mo-01abTd70esnCGX6w5lLlKjk7DPgpGt4VJW21D0swofoSy7D3SIxCkTnOKMePWPxI74ETGnaRMgVlrLBncZfRq-xmsZPbWGJ=w1545-h869-s-no?authuser=0",
					"desc": "A reindeer, a woman in running gear, and a green sleigh with fall decorations stand near a wooden barn",
					"caption": "Hosting the Sleigh Me Ultra to benefit ROCovery",
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
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczNJplCon0axHHutjossir-7gDMs_zZ3KwhO9CC5x-fhlqx6DRG4n6GS_XK-8UrmloCRy1PXx8A5GeBgtyjv6LF9MWupiFPPPBxYLQOm4u53CoFfA_Afe43fgeym8fMx57IPaClaeITvXtmsl8wfBGnN=w652-h869-s-no?authuser=0",
					"desc": "A man reaches through a red fence to feed a small reindeer while another man looks on. The reindeer is covered in snow and it is snowing.",
					"caption": "A visit to Camp Good Days",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczN-nIkLAE71tmoFUWRybxIHSxxcYfdQlePzQLPdpbKg_hOSk6q5htfMqJ-mD_sQpWE3fzlCfgSdzfFDbJjieG4KE08tRFFeLpho-qCG70hCWWe7Ok1qdCYv59rMONEDpyFgkQdqhAbkAfKm6ECSA12Y=w626-h869-s-no?authuser=0",
					"desc": "Two reindeer with red-and-black halters and harnesses stand in front of a house lit with white lights.",
					"caption": "In New York City, acting like pros for a TV commerical",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczPNrC3cBzxFsQd9iRX5MScWlqS7RJ3em1jfqhLHxwKICqDDggtOpz1Safs55TR22HqbgcNMeXX7xVpLvV_-7OE5JjJFDu6E6QKDUZr8B3aCc-hY07Ir_y-pr976sc9No-B6UcC05_8dKBQqq1DIuFrD=w489-h869-s-no?authuser=0",
					"desc": "The head of a reindeer with large antlers, covered in velvet. The reindeer is standing in front of a group of people sitting on hay bales listening to a presenter, in a wooden barn with rustic rafters.",
					"caption": "A bull reindeer with antlers in velvet, hosting an agritourism seminar",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczNbJHCweP4CECboGK1dBnqtWQhNJ8utZtmUXObE2_OvrHsN-XeRWoqCrdhq15de7kYrLyTLpAyHeuMEBlxBV_xH72MIFXhPzbEETHBK_LRpcNzJHLHZIrKuuIH8bqdbPLPO1sJ1-sN1SFBgqgNXRYmv=w489-h869-s-no?authuser=0",
					"desc": "A bull reindeer in the snow showing off his large rack. Look at those toes! and reindeer pellets in the snow.",
					"caption": "A bull reindeer after rubbing the velvet off of his antlers",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczPjn6KrDaRwuGSr4c0DpdNdFggdz7TFffPzUpGakt8wS3QJ3K3W0LTFf3EmqCPF_6eFr5-FSfiO8AU6eyWxz5Hf4z1x76tunQM6aumz6bmM5gmkNDVCQopRvrMlg0haQp9V3_ZWk0S2v6viioi6CAFn=w1144-h869-s-no?authuser=0",
					"desc": "A female reindeer on a fall day, standing in deep leaves, in front of a fence and woods.",
					"caption": "Reindeer cows have antlers, too!",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3c-gSmUg2YdZ6GsH9ZN-IJfTUx-wOKj0H5xHXe0eoIM6_I0j811hn7uIG2aQOQia8IyvZCtvUgNs89fexj-0X8AIPH2Zy_cWCaMcesfTUg9akhzjVI8MgxlYcO6jCArp1bqOdM89Sd9_AI01Qtt9wNcAQ=w1669-h938-no?authuser=0",
					"desc": "Two baby reindeer in front of a fence. Two adult reindeer behind the fence. One of the babies is grazing and the other is mugging for the camera.",
					"caption": "Some new boys from Alaska join the herd",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczMUGq6odm972JPo_48daoMF3pXptLDTKTxbRbmW32UmLVvLJYG0xQKw1e4U_AaANB_GfIczzsebEFVz2QC6ivIeM2TDipZZ0k8M4VZDgOeExyAyKmyAYxGh80npKKB4e1XNhQb7nu7iDZbsPxbDQlcS=w1545-h869-s-no?authuser=0",
					"desc": "A reindeer with a shaggy, shedding coat and small antlers in velvet.",
					"caption": "Reindeer get pretty shaggy, shedding their winter coats",
				},
								
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczN08TKGnGgIFPdhJedmqfwLQNjL4UZmmxFAf7TY7526UxIIe96Ez2sHJZRV-WlOcDNM5WroAa2lVMkS__rnXSt5LlUp7W39RbA0UTJEdsW17l9Vz4tLJel368MSvT_S6A02flu1CkE06AfMsd9m85v7=w788-h869-s-no?authuser=0",
					"desc": "A female reindeer touches noses with a chain saw carving of a reindeer. There is a sled in the foreground, and snowy trees in the background.",
					"caption": "Checking out the new arrival from North Pole, Alaska",
				},
			],
		},
		
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
					"picture": "https://lh3.googleusercontent.com/gWnvY8HB2sLz1mn6rldtL6BporasZ6oPTmt0mJO70hJkuinbjBC5KFMxJlND3QBrjX8VKqIDTct7P5fKuc2b9rKJnFtVaVB7-yB49V83VxVMjKDxfwjNHOBNSWL-Fx9eMZjwPzYqSnKM-ZBcGPBI0G1ozh19oNmcj3z1TUKjZJLamOJVrU3tGSEmX_yRlgUDu955CmsMR8EeS0FCVI02-J_DxT2z6gYhvvJAnzOyZy4nF4MnV4TUY_FNBTJC6xKUZsLFL0otS1gZsTUkdLdt0-W50yy_pid8M19MShn65iWnnw8NJ2uP6dRpCdgR6pgXjotD9v7UAU1wrrUIEt2Hf3X2qV4MjNh2YiRcqjCe5JF9sRhOPS52qxINpS1We53KqyZDmQAa3nz0GJBO1lNyECWRiv-B3siYwTV4mQ5q5KAsFnoQcU-B6aKEdp9R2Bjff6t8rDLaxIy5uyKF_pxyjL_0hhue_v8BeikKo5ZHknOvAXetHDFroviLXRdyuDAH5fawyu74C7uTaGNvsp6RmWfUribh-4FPeUztUTcVioErEciQk1lhs6cn_PCXlWQhVQJ3gqE8Tr7HRqoisv7R2H6gBT4H6doLjSJCfUhikIy8vwqHQ2pDip-5Ym8r0WvtXqOPZltxRIxHN0xHdqUO30ZWOo7dg1j-nRXKTZo8cRNY67oGU9sAJUt_LwKxTAAYiCSjFQ8njyhniHz6YcebZ3FoEz5ZiQq6EIyK_R7eTvL0KydX=s937-no",
					"desc": "A picture of the barn with sides and roof nearly complete.",
					"caption": "Waiting for cedar shingles from Maine",
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
			"name": "New Construction 2020-2023",
			"photos": [
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3f-Y9qc9XRURdLIDWFvQPcQWnphboPp1fhb2EpTrPhCfqhoZSeRAr_YiR3RitcuxZRq5nWXKup2Yo5I4qsJC1oN_ULyCJFnzvDTjn6hHN079n2pbjas2-DzfMB-nq0HgLDAWlq0mxf20Rwi6IcrVFUQmw=w1669-h938-no?authuser=0",
					"desc": "The frame of a short hallway attached to the barn. The posts still have bark on them.",
					"caption": "The beginnings of the back patio for the boys to dine",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3crO9ZnOstGUi15UE8YOo8G0FC8HNvPDKTHGS3xmfB8C44bAKqgzaLaIIRi0S3HLxFFCSfEq41KFXr6lb4on_XWyWbRtvXbRx9xghNF-w_WsPO3GPXctXt8OATi8S7qhYSB-h-1mPWx5Cxb3smFd_ViKg=w1669-h938-no?authuser=0",
					"desc": "The frame of a short hallway with no walls. The posts still have bark on them. Evenly spaced horizontal boards are laid along the length of the roof.",
					"caption": "Roof boards provide some shade until the shingles are on",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3eK4jJ7H7R-6tV6HD0rxyVNyjU0ayXJoxAZFCWT6qDcBYYnfT9221-7eLPhaVGKNxJ-j9mvYsaWNhKKkxHGlFxLESGdTZjhFf3XGWjhzJ1YHYJ-N1mop_jD6n_kf1Zq2jaumx6zeeTPAwM09MobzTuImw=w1669-h938-no?authuser=0",
					"desc": "Two reindeer eating out of a trough under the roof of the short hallway. There's probably a better word than hallway, because three sides are open air and one side is attached to the barn.",
					"caption": "I think the boys like the new dining facility",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3epxAQ_RTpJxZkSnf_IPeeamEkuGJMbOYXFdKZgVeyt227v7LVGRayeq0Vem9HKvR1wM3Fqn0Ty__NTiBv1NgtwkjR9J6Sc5Rn9Zp1Pf-i15suQyePtZ1AQOaI2rql9vN27a1hH0iEqlLWSQPNvPdpMmw=w1669-h938-no?authuser=0",
					"desc": "A side view of the beginning of the new entryway. A timber-and-rope contraption called a gin pole is used to lift the heavy beams up.",
					"caption": "Learned how to use a \"Gin Pole\" to lift 32 ft beams for a covered front entry way",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3e7aP0Vlx7J4sjL8OcMCc9wTOBeOY7cMVWz_ueLJw6mC_1aYmSr1WwoLU5w3TYSspkveeoe6Dkx2IAVuzLiLz2_cuen9_RGHHwkJ8iryuz7VssIgyop-2kGBezB2fk67lSOvwUA0R2eQ3Fhq2nOjALegQ=w1669-h938-no?authuser=0",
					"desc": "Three poles laid along the length of the new entryway, ready to hold the roof.",
					"caption": "Three roof beams of ash are up, sitting on beams of wild cherry",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3esq2rwMyS1BwkcYOyVP0ZzVbDi9obF6nuLuagzShSdNnYk4Dr1NQJ3jXyD7KfJyAOj_6Fn6iAdN5Nj2TyRPj6USZfHvJ2cWg6rcmXpRD_VsC4z1Q9f1Lo9A7mog5OkOxpPpIG9r37k30ZYqqdEOd2PGg=w1669-h938-no?authuser=0",
					"desc": "Vertical posts are added to the horizontal frames and angled rafters are in place, ready to hold the roof.",
					"caption": "And the frame is done! The Emerald Ash Borer killed lots of my ash trees, but the ash makes good rafters",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3evvPm90tmSKoe2O1ma161AVtDOhNUzkVTHpDCrWGf8NjkFkGjDCoGN7mmyjcQNYDdxPz6vjU0ODFyNwXnB8Uh4P9IrsOdM3c-_J35tUoau0Q993Pku7iUvXHKbkEt9vOB5jCrGYkvwFTcPGnVqMEVF0A=w1669-h938-no?authuser=0",
					"desc": "A side view of the in-progress entryway. One reindeer is grazing and one is eyeing the gate.",
					"caption": "The big boys checking out the new entryway",
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
					"picture": "https://lh3.googleusercontent.com/pw/ACtC-3fWWq03S5SoQY6nEiTOKkC82ORY5f1wtqA_5M82bkqzW3YVww3RFzYSsjV5ad1G4NFvYA-2ZAqvEIZ6jZoGgJuO28dwPImOPfQRH4pOYG3tKF_rYoTXQz3QQ9hvZKJ_ySflusowoUmqVSc8ic8aT0SVFA=w1669-h938-no?authuser=0",
					"desc": "A ground-level view of the entryway and small building with piles of cedar shingles on their roofs.",
					"caption": "The progress is slow with an old school hammer and nails but it's a fun journey",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczNw-cNUOusZYKtUwjb6W9u1hZSeJnhqzB5M4d-QAXgqMFf3OEcuCxsUiLJx6pQzu3z0SWA8k41VdRR64nbobjxkPbeTuLUasUg07G74qV-2iPbtERvoibmFi3enbqyd8jjpL7LYFbBsy1Jk9QYTjz_t=w1304-h869-s-no?authuser=0",
					"desc": "Two men bend over a pile of large poles, preparing to set them in the ground. A red tractor is in the background.",
					"caption": "The octagonal barn is great for the reindeer. Now we need a BIGGER barn for the people who visit",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczPXTRGH3PM69ywVChvsE-huywWCmm7EEv188rsw4rg-gcNGhUBRNYr4tT6VAN7I34ZTzNe5oHklla_-7457LHKydUa5mgJrRXX-oGtS5hngI5Jz0D6Mb0VOT5fX12iXzgyoYKez22GbzNsffIatp5u_=w1545-h869-s-no?authuser=0",
					"desc": "Two men bend struggle to lift one end of a large log and place the other end in a hole.",
					"caption": "The beams are a heavy! Thank goodness for willing helpers",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczML8ZwrX_VGO6VlLv47aViB7k2omBqXmy_R6R-GG0S1-rkrnVQL0GWeNschk0AqBvr9tiryAv2bJTa6_emSifTocBw65kNPPcM6frtuNTZYTNOHG8BqHZmId0POW1ylEDQ4VkWiilWqoFqOciX41AJ2=w1304-h869-s-no?authuser=0",
					"desc": "A man holds a reindeer on a lead in front of a cabin, with a partially finished barn roof overhead. There are fall decorations, corn, mums and pumpkins in front of the cabin.",
					"caption": "Inspecting the new construction",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczO-wBN5HxMpBsY9LllekdP2i7d4c6S__s-A-1GSspSP1y7CWr1MAh6B930Fi1AOn3VFE_FInBYbzSzhph9wcylN1HAS4xCYUYYdODKP0LUWx8J0rKEJDWIYIJi0g-i6Uh4wEB6E-cztVlbnKwDBBz7i=w1361-h869-s-no?authuser=0",
					"desc": "A gnome made of cedar branches with a potato for a nose stands in frong of a barn with christmas trees, a wreath and a welcome sign.",
					"caption": "The new classroom barn is finished",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczPeepyG3pXvNWAlm0PGioECQOlmI7iV9D0raYwgWPLWaEeUeykNCxR-1oaW14owrLPre9SjPrdCi65dq60bJS57B39LtKR1aMI3JQ8gRteRNEzDL0SZDJWSfSlT_DeDRjuV_dlTmSyBe0FiM2cH2m7m=w1159-h869-s-no?authuser=0",
					"desc": "A gnome made of cedar branches with a potato for a nose stands in frong of a barn with christmas trees, a wreath and a welcome sign.",
					"caption": "Well, never quite finished. Added a front porch for Ranger, the new statue from North Pole, Alaska",
				},
				{
					"picture": "https://lh3.googleusercontent.com/pw/AP1GczPwCNTBel9pTUtntUrCMva58UocKHckI_ZzQmrDNnKWrjLrHVvL0rBu0hZmsyC6bmGge_xz00xV1BssT2vNgOIjhml0sYgbMwUMG5aJTpPNoLanXxZvGRc0KItxP6r_G-1bd-5Zl04D54eW6WJL9LTY=w577-h869-s-no?authuser=0",
					"desc": "Two reindeer in a corral inside of a wooden barn, with a fireplace and sleigh in the background.",
					"caption": "And then added another section on the back, to accomodate more guests for photos by the fireplace, feeding the reindeer, and enjoying the festive atmosphere",
				},
			]
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
