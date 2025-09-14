"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Clock, User, Phone, Stethoscope, MessageSquare } from "lucide-react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Prop types for the components
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ElementType;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon: React.ElementType;
}

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon: React.ElementType;
}


// 입력 필드 컴포넌트
const InputField: React.FC<InputFieldProps> = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      <Icon size={20} />
    </span>
    <input {...props} className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
  </div>
);

const SelectField: React.FC<SelectFieldProps> = ({ icon: Icon, children, ...props }) => (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      <Icon size={20} />
    </span>
    <select {...props} className="w-full pl-10 p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white">
      {children}
    </select>
  </div>
);

const TextareaField: React.FC<TextareaFieldProps> = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <span className="absolute top-3 left-0 flex items-center pl-3 text-gray-400">
      <Icon size={20} />
    </span>
    <textarea {...props} className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" />
  </div>
);


export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    message: "",
  });

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`예약이 접수되었습니다!\n\n날짜: ${selectedDate && format(selectedDate as Date, "yyyy년 MM월 dd일", { locale: ko })}\n시간: ${selectedTime}\n이름: ${formData.name}\n연락처: ${formData.phone}`);
  };

  return (
    <section id="booking" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-foreground mb-4">
            온라인 진료 예약
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            기다림 없이 편안하게 진료받으실 수 있도록,
            <br className="hidden sm:block" />
            온라인으로 간편하게 예약하고 방문하세요.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="grid gap-12 lg:grid-cols-2">
            {/* 날짜 및 시간 선택 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-h4 font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock size={24} className="text-primary" />
                  날짜 및 시간 선택
                </h3>
                <div className="calendar-container">
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    locale="ko-KR"
                    minDate={new Date()}
                    formatDay={(_, date) => format(date, "d")}
                  />
                </div>
              </div>
              {selectedDate && (
                <div>
                  <h4 className="font-semibold text-foreground mb-4">시간 선택</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg text-center transition-all duration-200 ${selectedTime === time
                            ? 'bg-primary text-white font-bold shadow-md'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 예약 정보 입력 */}
            <div className="space-y-6">
              <h3 className="text-h4 font-semibold text-foreground flex items-center gap-2">
                <User size={24} className="text-primary" />
                예약자 정보 입력
              </h3>
              <InputField
                icon={User}
                type="text"
                required
                placeholder="성함"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <InputField
                icon={Phone}
                type="tel"
                required
                placeholder="연락처 (010-0000-0000)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <SelectField
                icon={Stethoscope}
                required
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              >
                <option value="">진료과목 선택</option>
                <option value="prostate">전립선 클리닉</option>
                <option value="male-function">남성기능 클리닉</option>
                <option value="urinary">배뇨장애 클리닉</option>
                <option value="stone">요로결석 클리닉</option>
              </SelectField>
              <TextareaField
                icon={MessageSquare}
                rows={4}
                placeholder="증상이나 요청사항을 간단히 적어주세요."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full btn-primary text-lg py-4 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                예약 신청하기
              </button>
              <p className="text-sm text-center text-gray-500">
                * 예약 신청 후 병원에서 드리는 확정 연락을 꼭 확인해주세요.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

