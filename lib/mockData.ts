export const mockTestimonials = [
  {
    id: 1,
    name: "김○○",
    age: 45,
    treatment: "전립선비대증",
    rating: 5,
    content: "오랫동안 고민했던 증상이 확실히 개선되었습니다. 원장님의 자세한 설명과 친절한 진료 덕분에 안심하고 치료받을 수 있었습니다.",
    date: "2024년 1월",
  },
  {
    id: 2,
    name: "이○○",
    age: 38,
    treatment: "남성기능개선",
    rating: 5,
    content: "부끄러워서 미루던 치료를 받게 되었는데, 전문적이면서도 편안한 분위기에서 상담받을 수 있어 좋았습니다. 치료 효과도 만족스럽습니다.",
    date: "2024년 1월",
  },
  {
    id: 3,
    name: "박○○",
    age: 52,
    treatment: "요로결석",
    rating: 5,
    content: "급성 통증으로 방문했는데 신속한 진단과 치료로 빠르게 회복할 수 있었습니다. 의료진 모두 친절하시고 시설도 깨끗해서 좋았습니다.",
    date: "2023년 12월",
  },
  {
    id: 4,
    name: "최○○",
    age: 29,
    treatment: "포경수술",
    rating: 5,
    content: "수술 전후 관리가 체계적이고, 회복 과정에서도 지속적인 케어를 받을 수 있어 안심이 되었습니다. 결과도 매우 만족스럽습니다.",
    date: "2023년 12월",
  },
];

export const mockCaseStudies = [
  {
    id: 1,
    title: "만성 전립선염 완치 사례",
    category: "전립선질환",
    summary: "5년간 지속된 만성 전립선염을 체계적인 치료로 완치",
    description: "반복적인 증상 재발로 고통받던 40대 남성 환자분께서 맞춤형 약물치료와 생활습관 개선을 통해 완치되었습니다.",
    duration: "3개월",
    result: "증상 완전 소실, 재발 없음",
  },
  {
    id: 2,
    title: "요실금 수술 성공 사례",
    category: "요실금",
    summary: "전립선 수술 후 발생한 요실금을 최소침습수술로 해결",
    description: "타 병원 전립선 수술 후 발생한 요실금으로 일상생활에 큰 불편을 겪던 환자분이 TOT 수술을 통해 정상 생활로 복귀하셨습니다.",
    duration: "수술 후 2주",
    result: "요실금 95% 이상 개선",
  },
  {
    id: 3,
    title: "재발성 요로결석 치료",
    category: "요로결석",
    summary: "체외충격파쇄석술과 생활습관 개선으로 재발 방지",
    description: "매년 재발하던 요로결석을 체계적인 검사를 통해 원인을 파악하고, 맞춤 치료와 식이요법으로 2년째 재발 없이 건강을 유지하고 계십니다.",
    duration: "1개월",
    result: "결석 완전 제거, 2년간 재발 없음",
  },
];

export const mockDoctors = [
  {
    id: 1,
    name: "김정훈",
    title: "대표원장",
    specialty: "전립선질환, 남성의학",
    education: [
      "서울대학교 의과대학 졸업",
      "서울대학교병원 비뇨의학과 전문의",
      "대한비뇨기과학회 정회원",
      "대한남성과학회 정회원",
    ],
    experience: "20년",
    image: "/images/doctor1.png",
  },
  {
    id: 2,
    name: "이민수",
    title: "진료원장",
    specialty: "요로결석, 배뇨장애",
    education: [
      "연세대학교 의과대학 졸업",
      "세브란스병원 비뇨의학과 전문의",
      "대한비뇨기내시경학회 정회원",
      "대한요로결석학회 정회원",
    ],
    experience: "15년",
    image: "/images/doctor2.png",
  },
];

export const departments = [
  {
    id: "prostate",
    name: "전립선클리닉",
    description: "전립선비대증, 전립선염 등 전립선 질환 전문 진료",
  },
  {
    id: "male-function",
    name: "남성기능클리닉",
    description: "발기부전, 조루증 등 남성 기능 개선 치료",
  },
  {
    id: "urinary",
    name: "배뇨장애클리닉",
    description: "빈뇨, 야간뇨, 요실금 등 배뇨 관련 질환 치료",
  },
  {
    id: "stone",
    name: "요로결석클리닉",
    description: "신장결석, 요관결석 등 체외충격파 치료",
  },
  {
    id: "infection",
    name: "비뇨기감염클리닉",
    description: "요도염, 방광염, 성병 등 감염성 질환 치료",
  },
  {
    id: "surgery",
    name: "비뇨기수술클리닉",
    description: "포경수술, 정관수술 등 각종 비뇨기 수술",
  },
  {
    id: "female",
    name: "여성비뇨기클리닉",
    description: "여성 방광염, 골반장기탈출증 등 전문 치료",
  },
  {
    id: "pediatric",
    name: "소아비뇨기클리닉",
    description: "소아 야뇨증, 요로감염 등 소아 전문 진료",
  },
];