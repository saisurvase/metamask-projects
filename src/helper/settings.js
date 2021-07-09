module.exports = {
  BLOG_PAGE_SIZE: 4,
  DEFAULT_PAGE_SIZE: 10,
  MEDICAL_DURABLE_CATEGORY_PAGE_SIZE: 8,
  DEFAULT_DIAGNOSTIC_CATEGORY_PAGE_SIZE: 6,
  DEFAULT_DIAGNOSTIC_SUB_CATEGORY_PAGE_SIZE: 8,
  HOMECARE_CATEGORY_PAGE_SIZE: 8,
  IPD_HOSPITALDETAIL_PACKAGELIST_SIZE: 8,
  NO_IMAGE_URL: '',
  MAXIMUM_ITEM_AMOUNT: 5,
  APP_STORE_LINK: 'https://apps.apple.com/us/app/surite/id1484348868',
  PLAY_STORE_LINK: 'https://play.google.com/store/apps/details?id=com.surite.surite',
  fbAdvertisementKeys: ['fbclid'],

  languagePreference: [
    {
      id: '1',
      label: 'Hindi',
      value: 'Hindi'
    },
    {
      id: '2',
      label: 'Bengali',
      value: 'Bengali'
    },
    {
      id: '3',
      label: 'Marathi',
      value: 'Marathi'
    },
    {
      id: '4',
      label: 'Gujarati',
      value: 'Gujarati'
    },
    {
      id: '5',
      label: 'English',
      value: 'English'
    }
  ],
  doctorConsultationFees: [
    { value: '0', fees: { feesFrom: '0', feesTo: '500' }, label: 'Rs 0 - Rs 500' },
    { value: '500', fees: { feesFrom: '500', feesTo: '1000' }, label: 'Rs 500 - Rs 1000' },
    { value: '1000', fees: { feesFrom: '1000', feesTo: '1500' }, label: 'Rs 1000 - Rs 1500' },
    { value: '1500', fees: { feesFrom: '1500', feesTo: '2000' }, label: 'Rs 1500 - Rs 2000' },
    { value: '2000', fees: { feesFrom: '2000', feesTo: '2500' }, label: 'Rs 2000 - Rs 2500' },
    { value: '2500', fees: { feesFrom: '2500', feesTo: '3000' }, label: 'Rs 2500 - Rs 3000' },
    { value: '3000', fees: { feesFrom: '3000', feesTo: '3500' }, label: 'Rs 3000 - Rs 3500' },
    { value: '3500', fees: { feesFrom: '3500', feesTo: '4000' }, label: 'Rs 3500 - Rs 4000' }
  ],
  doctorAvailabilityList: [
    { value: '0', label: 'Today' },
    { value: '1', label: 'Tomorrow' },
    { value: '7', label: 'Next 7 days' },
    { value: '30', label: 'Next 1 month' },
    { value: '90', label: 'Next 3 months' },
    { value: '180', label: 'Next 6 months' },
    { value: '365', label: 'Next 1 year' }
  ],
  medicalDurableProductPricesOptions: [
    { value: '0', price: { priceFrom: '0', priceTo: '500' }, label: 'Rs 0 - Rs 500' },
    { value: '500', price: { priceFrom: '500', priceTo: '1000' }, label: 'Rs 500 - Rs 1000' },
    { value: '1000', price: { priceFrom: '1000', priceTo: '2000' }, label: 'Rs 1000 - Rs 2000' },
    { value: '2000', price: { priceFrom: '2000', priceTo: '5000' }, label: 'Rs 2000 - Rs 5000' },
    { value: '5000', price: { priceFrom: '5000', priceTo: '10000' }, label: 'Rs 5000 - Rs 10000' },
    { value: '10000', price: { priceFrom: '10000', priceTo: '15000' }, label: 'Rs 10000 - Rs 15000' },
    { value: '15000', price: { priceFrom: '15000', priceTo: '20000' }, label: 'Rs 15000 - Rs 20000' },
    { value: '20000', price: { priceFrom: '20000', priceTo: '30000' }, label: 'Rs 20000 - Rs 30000' }
  ],
  serviceLineList: {
    opd: 'Doctor',
    ipd: 'Hospitalization',
    concierge: 'Concierge',
    diagnostic: 'Diagnostic',
    homecare: 'Home Care',
    ambulance: 'Ambulance',
    medicaldurable: 'E-Wellness Store',
    pharmacy: 'Pharmacy'
  },
  serviceLineKeyList: {
    opd: 'opd',
    ipd: 'ipd',
    concierge: 'concierge',
    diagnostic: 'diagnostic',
    homecare: 'homecare',
    ambulance: 'ambulance',
    medicaldurable: 'medicaldurable',
    pharmacy: 'pharmacy'
  },
  genderList: [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' },
    { value: 'O', label: 'Third Gender' }
  ],
  zoneList: [
    {
      id: '1',
      zoneName: 'EAST INDIA',
      cityList: [
        {
          id: '1',
          cityName: 'Kolkata'
        },
        {
          id: '2',
          cityName: 'Siliguri'
        },
        {
          id: '3',
          cityName: 'Guwahati '
        },
        {
          id: '4',
          cityName: 'Shillong '
        },
        {
          id: '5',
          cityName: 'Howrah '
        },
        {
          id: '6',
          cityName: 'Jorhat'
        },
        {
          id: '7',
          cityName: 'Bhubaneshwar'
        }
      ]
    },
    {
      id: '2',
      zoneName: 'WEST INDIA',
      cityList: [
        {
          id: '1',
          cityName: 'Mumbai'
        },
        {
          id: '2',
          cityName: 'Jaipur'
        },
        {
          id: '3',
          cityName: 'Pune '
        },
        {
          id: '4',
          cityName: 'Ahmedabad '
        },
        {
          id: '5',
          cityName: 'Surat '
        },
        {
          id: '6',
          cityName: 'Jodhpur'
        },
        {
          id: '7',
          cityName: 'Nagpur'
        }
      ]
    }
  ],
  listOfAddressTypes: [
    'premise',
    'street_number',
    'route',
    'sublocality_level_3',
    'sublocality_level_2',
    'sublocality_level_1',
    'locality',
    'administrative_area_level_2',
    'administrative_area_level_1',
    'country',
    'postal_code'
  ],
  routeName: {
    // Web start
    web: {
      webLandingRoute: { path: '/web-landing' },
      webProductDetailRoute: { path: '/web-product-detail', subPath: ['nftId'] }
    },
    // Web end
    formRoute: { path: '/form' },
    nftTokenListRoute: { path: '/nft-token-list' },
    testRoute: { path: '/test' },
    homeRoute: { path: '/' },
    fourZeroFourRoute: { path: '/404' },
    ccavenueResponseRoute: { path: '/ccavenue-response' },
    aboutUsRoute: { path: '/about-us' },
    termsAndConditionRoute: { path: '/terms-and-condition' },
    privacyPolicyRoute: { path: '/privacy-policy' },
    auth: {
      loginRoute: { path: '/login' },
      facebookLoginSuccessRoute: { path: '/facebook-login-success' },
      registerRoute: { path: '/register' },
      forgotPINRoute: { path: '/forgot-pin' },
      resetPINRoute: { path: '/reset-pin' },
      otpVerificationRoute: { path: '/otp-verification' },
      passwordRoute: { path: '/password' }
    },
    doctor: {
      doctorSpecialityRoute: { path: '/doctor-speciality' },
      doctorsRoute: { path: '/doctors' },
      doctorsWithCategoryRoute: { path: '/doctors', subPath: ['specialitySlug'] },
      doctorDetailRoute: { path: '/doctor-detail', subPath: ['doctorSlug'] },
      doctorAppointmentRoute: { path: '/doctor-appointment' },
      doctorEnquirySuccessfulRoute: { path: '/doctor-enquiry-successful' }
    },
    eCommerceAndEPharma: {
      eCommerceLandingRoute: { path: '/ecommerce-landing' },
      ePharmaLandingRoute: { path: '/epharma-landing' },
      ePharmaProductWithoutSlugRoute: { path: '/epharma-product' },
      eCommerceProductWithoutSlugRoute: { path: '/ecommerce-product' },
      eCommerceCategoryRoute: { path: '/ecommerce-category' },
      ePharmaCategoryRoute: { path: '/epharma-category' },
      eCommerceCategoryWithParentSlugRoute: { path: '/ecommerce-category', subPath: ['categorySlug'] },
      ePharmaCategoryWithParentSlugRoute: { path: '/epharma-category', subPath: ['categorySlug'] },
      eCommerceProductRoute: { path: '/ecommerce-product', subPath: ['categorySlug'] },
      ePharmaProductRoute: { path: '/epharma-product', subPath: ['categorySlug'] },
      eCommerceProductDetailRoute: { path: '/ecommerce-product-detail', subPath: ['productSlug'] },
      ePharmaProductDetailRoute: { path: '/epharma-product-detail', subPath: ['productSlug'] },
      eCommerceCartRoute: { path: '/ecommerce-cart' },
      ePharmaEnquirySuccessfulRoute: { path: '/epharma-enquiry-successful' },
      pharmacyCartRoute: { path: '/pharmacy-cart' },
      eCommerceCheckoutRoute: { path: '/ecommerce-checkout' },
      eCommerceProductCompareRoute: { path: '/ecommerce-compare' },
      eCommerceEPharmaCCAvenueRoute: { path: '/ecommerce-epharma/payment-gateway/ccavenue' },
      eCommerceEpharmaOrderSuccessfulRoute: { path: '/ecommerce-epharma-order-successful' },
      eCommerceEPharmaPaymentResponseRoute: { path: '/ecommerce-epharma-payment-response' },
      pharmacyCheckoutRoute: { path: '/pharmacy-checkout' },
      ePharmaSearchMedicine: { path: '/epharma-search-medicine' },
      ePharmaUploadPrescription: { path: '/epharma-order-by-prescription' }
    },
    medicalDurable: {
      medicalDurableLandingRoute: { path: '/medical-durable-landing' },
      medicalDurableCategoryRoute: { path: '/medical-durable-category' },
      medicalDurableSubcategoryRoute: { path: '/medical-durable-subcategory' },
      medicalDurableProductRoute: { path: '/medical-durable-product', subPath: ['categorySlug'] },
      medicalDurableProductDetailRoute: { path: '/medical-durable-product-detail', subPath: ['productSlug'] },
      medicalDurableProductCompareRoute: { path: '/medical-durable-compare' },
      medicalDurableCartRoute: { path: '/medical-durable-cart' },
      medicalDurableCheckoutRoute: { path: '/medical-durable-checkout' },
      medicalDurableOrderSuccessfulRoute: { path: '/medical-durable-order-successful' },
      medicalDurablePaymentResponseRoute: { path: '/medical-durable-payment-response' },
      medicalDurableCCAvenueRoute: { path: '/medical-durable/payment-gateway/ccavenue' }
    },
    ambulance: {
      ambulanceLandingRoute: { path: '/emergency-landing' },
      ambulanceEnquiryRoute: { path: '/emergency-enquiry' },
      ambulanceAdditionalServicesRoute: { path: '/emergency-additional-services' },
      ambulanceEnquirySuccessfulRoute: { path: '/emergency-enquiry-success' }
    },
    homecare: {
      homecareLandingRoute: { path: '/homecare-landing' },
      homecareEnquirySuccessRoute: { path: '/homecare-enquiry-success' },
      homecareCategoryRoute: { path: '/homecare-category', subPath: ['categorySlug'] },
      homecareCategoryLandingRoute: { path: '/homecare-subcategory', subPath: ['categorySlug'] },
      homecareCategoryDetailRoute: { path: '/homecare-category-detail', subPath: ['categorySlug'] }
    },
    profile: {
      profileRoute: { path: '/profile' },
      bookingEnquiry: {
        bookingEnquiryRoute: { path: '/profile/booking-enquiry' },
        doctor: {
          bookingEnquiryDoctorRoute: { path: '/profile/booking-enquiry/doctor' },
          bookingEnquiryDoctorDetailRoute: { path: '/profile/booking-enquiry/doctor-detail' },
          bookingEnquiryDoctorPaymentResponseRoute: { path: '/profile/booking-enquiry/doctor-payment-response' }
        },
        medicalDurable: {
          bookingEnquiryECommerceRoute: { path: '/profile/booking-enquiry/ecommerce' },
          bookingEnquiryECommerceDetailRoute: { path: '/profile/booking-enquiry/ecommerce-detail' }
        },
        diagnostic: {
          bookingEnquiryDiagnosticRoute: { path: '/profile/booking-enquiry/diagnostic' },
          bookingEnquiryDiagnosticDetailRoute: { path: '/profile/booking-enquiry/diagnostic-detail' },
          bookingEnquiryDiagnosticPaymentResponseRoute: { path: '/profile/booking-enquiry/diagnostic-payment-response' }
        },

        ipd: {
          bookingEnquiryIpdRoute: { path: '/profile/booking-enquiry/hospitalization' },
          bookingEnquiryIpdDetailRoute: { path: '/profile/booking-enquiry/hospitalization-detail' },
          bookingEnquiryIpdPaymentResponseRoute: { path: '/profile/booking-enquiry/hospitalization-payment-response' }
        },
        ambulance: {
          bookingEnquiryAmbulanceRoute: { path: '/profile/booking-enquiry/emergency' },
          bookingEnquiryAmbulanceDetailRoute: { path: '/profile/booking-enquiry/emergency-detail' },
          bookingEnquiryAmbulancePaymentResponseRoute: { path: '/profile/booking-enquiry/emergency-payment-response' }
        },
        homecare: {
          bookingEnquiryHomecareRoute: { path: '/profile/booking-enquiry/homecare' },
          bookingEnquiryHomecareDetailRoute: { path: '/profile/booking-enquiry/homecare-detail' },
          bookingEnquiryHomecarePaymentResponseRoute: { path: '/profile/booking-enquiry/homecare-payment-response' }
        },
        pharmacy: {
          bookingEnquiryPharmacyRoute: { path: '/profile/booking-enquiry/pharmacy' },
          bookingEnquiryPharmacyDetailRoute: { path: '/profile/booking-enquiry/pharmacy-detail' }
        },
        concierge: {
          bookingEnquiryConciergeRoute: { path: '/profile/booking-enquiry/concierge' },
          bookingEnquiryConciergeDetailRoute: { path: '/profile/booking-enquiry/concierge-detail' },
          bookingEnquiryConciergePaymentResponseRoute: { path: '/profile/booking-enquiry/concierge-payment-response' }
        },
        payment: {
          paymentOptionsRoute: { path: '/profile/booking-enquiry/payment-options' },
          payAtServicePointRoute: { path: '/profile/booking-enquiry/pay-at-service-point' },
          paymentSuccessfulRoute: { path: '/profile/booking-enquiry/payment-successful' }
        },
        tracking: {
          bookingTrackingDetail: { path: '/profile/booking-enquiry/tracking-detail' }
        }
      },
      paymentGateway: {
        ccavenueRoute: { path: '/profile/payment-gateway/ccavenue' }
      },
      profileEditRoute: { path: '/profile/profile-edit' },
      familyMemberRoute: { path: '/profile/family-member' },
      familyMemberAddRoute: { path: '/profile/family-member/add' },
      manageAddressRoute: { path: '/profile/address' },
      medicalRecordsCategoryRoute: { path: '/profile/medical-records-category' },
      medicalRecordsRoute: { path: '/profile/medical-records' },
      medicalRecordsByYearRoute: { path: '/profile/medical-records-by-year' },
      medicalRecordsDetailRoute: { path: '/profile/medical-records-detail' },
      medicalRecordsAddRoute: { path: '/profile/medical-records-add' },
      bookmarks: {
        bookmarksRoute: { path: '/profile/bookmarks' },
        bookmarksDoctorRoute: { path: '/profile/bookmarks/doctor' },
        bookmarksDiagnosticRoute: { path: '/profile/bookmarks/diagnostic' },
        bookmarksIpdRoute: { path: '/profile/bookmarks/hospitalization' },
        bookmarksMedicalDurablesRoute: { path: '/profile/bookmarks/medical-durable' },
        bookmarksPharmacyRoute: { path: '/profile/bookmarks/pharmacy' },
        bookmarksHomecareRoute: { path: '/profile/bookmarks/homecare' }
      },
      cancellation: {
        cancellationRoute: { path: '/profile/cancellation' },
        cancellationDoctorRoute: { path: '/profile/cancellation/doctor' },
        cancellationDiagnosticRoute: { path: '/profile/cancellation/diagnostic' },
        cancellationIpdRoute: { path: '/profile/cancellation/hospitalization' },
        cancellationMedicalDurablesRoute: { path: '/profile/cancellation/medical-durable' },
        cancellationHomecareRoute: { path: '/profile/cancellation/homecare' },
        cancellationAmbulanceRoute: { path: '/profile/cancellation/emergency' }
      },
      transaction: {
        transactionRoute: { path: '/profile/transaction' },
        transactionListRoute: { path: '/profile/transaction', subPath: ['serviceLine'] },
        transactionDetailRoute: { path: '/profile/transaction-detail' }
      },
      notificationRoute: { path: '/profile/notification' },
      supportTicket: {
        supportTicketListRoute: { path: '/profile/support-ticket' },
        supportTicketConversationRoute: { path: '/profile/support-ticket-detail' },
        supportTicketGenerateRoute: { path: '/profile/support-ticket-generate' }
      },
      conciergeAvailPackageRoute: { path: '/profile/concierge-avail-package' },
      conciergeAvailPackageDetailRoute: { path: '/profile/concierge-avail-package-detail' },
      conciergeAvailPackageActivityReminderRoute: { path: '/profile/concierge-avail-package-activity-reminder' }
    },
    diagnostic: {
      diagnosticLandingRoute: { path: '/diagnostic-landing' },
      diagnosticCategoryRoute: { path: '/diagnostic-category' },
      diagnosticSubcategoryRoute: { path: '/diagnostic-subcategory', subPath: ['categorySlug'] },
      diagnosticTestRoute: { path: '/diagnostic-test', subPath: ['categorySlug'] },
      diagnosticPackageRoute: { path: '/diagnostic-package', subPath: ['categorySlug'] },
      diagnosticServiceProvidersRoute: { path: '/diagnostic-service-providers', subPath: ['packageOrTestSlug'] },
      diagnosticDetailRoute: { path: '/diagnostic-detail', subPath: ['packageOrTestSlug', 'serviceProviderId'] },
      diagnosticCartRoute: { path: '/diagnostic-cart' },
      diagnosticEnquirySuccessfulRoute: { path: '/diagnostic-enquiry-successful' }
    },
    ipd: {
      ipdLandingRoute: { path: '/hospitalization' },
      ipdPackageRoute: { path: '/hospitalization-package' },
      ipdHospitalRoute: { path: '/hospitalization-hospital' },
      ipdPackageDetailRoute: { path: '/hospitalization-package-detail', subPath: ['packageSlug'] },
      // ipdHospitalDetailRoute: { path: '/hospitalization-hospital-detail', subPath: ['hospitalSlug', 'serviceProviderId'] },
      ipdHospitalDetailRoute: { path: '/hospitalization-hospital-detail', subPath: ['hospitalSlug'] },
      ipdPackageEnquiryRoute: { path: '/hospitalization-package-enquiry' },
      ipdAlacarteEnquiryRoute: { path: '/hospitalization-al-a-carte-enquiry' },
      ipdEnquirySuccessRoute: { path: '/hospitalization-enquiry-successful' }
    },
    blog: {
      blogsRoute: { path: '/blogs' },
      blogsWithCategoryRoute: { path: '/blogs', subPath: ['categorySlug'] },
      blogDetailRoute: { path: '/blog-detail', subPath: ['blogSlug'] }
    },
    faq: {
      faqCategoryRoute: { path: '/faq' },
      faqListRoute: { path: '/faq-list' }
    },
    concierge: {
      conciergeLandingRoute: { path: '/concierge-landing' },
      conciergePackageDetailRoute: { path: '/concierge-pacakge-detail', subPath: ['packageSlug'] },
      conciergePackageEnquirySuccessfulRoute: { path: '/concierge-enquiry-success' }
    }
  },
  gender: [
    {
      value: 'Male'
    },
    {
      value: 'Female'
    },
    {
      value: 'Others'
    }
  ],

  bloodGroup: [
    {
      value: 'A+'
    },
    {
      value: 'A-'
    },
    {
      value: 'AB+'
    },
    {
      value: 'AB-'
    },
    {
      value: 'B+'
    },
    {
      value: 'B-'
    },
    {
      value: 'O+'
    },
    {
      value: 'O-'
    }
  ],
  familyMemberRelationList: [
    {
      value: 'Siblings'
    },
    {
      value: 'Kids'
    },
    {
      value: 'Parent'
    },
    {
      value: 'in Law'
    },
    {
      value: 'Spouse'
    }
  ],
  healthCondition: [
    {
      value: 'Test'
    },
    {
      value: 'Diabetes'
    },
    {
      value: 'Asthma'
    },
    {
      value: 'Blindness'
    }
  ],
  // homePageServicelineInfo,

  // servicesWeOffer,

  socialMediaList: [
    {
      name: 'Facebook',
      // icon: socialFacebookIcon,
      link:
        'https://onometra.sharepoint.com/:w:/r/sites/001-EHPL-Documentation/_layouts/15/Doc.aspx?sourcedoc=%7B740576BA-348E-4F32-A276-6D9C05625E10%7D&file=Front-end%20issues_15th%20June.docx&action=default&mobileredirect=true'
    },
    {
      name: 'Twitter',
      // icon: socialTwitterIcon,
      link: ''
    },
    {
      name: 'Instagram',
      // icon: socailInstaIcon,
      link: ''
    },
    {
      name: 'Linkedin',
      // icon: socialLinkedIcon,
      link: ''
    },
    {
      name: 'Youtube',
      // icon: socialYoutubeIcon,
      link: ''
    }
  ],

  rebookingRestricationMessage: 'Sorry could not find what is looking for.',
  rebookingConciergeRestricationMessage: 'Sorry this package or duration is not available anymore.'
}
