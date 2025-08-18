import React from 'react';

// 버튼의 종류를 타입으로 정의
export type ButtonVariant =
  | 'login'
  | 'auth'
  | 'auth-cancel'
  | 'toggle'
  | 'connect'
  | 'updateUser'
  | 'createRole'
  | 'save';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  active?: boolean; // 'toggle' variant를 위해 사용
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  active = false,
  ...props
}) => {
  // --- 공통 스타일 정의 ---
  const baseStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 8px',
    border: '1px solid transparent',
    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.1)', // Drop Shadow
    color: '#FFFFFF', // 기본 텍스트 색상
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    fontWeight: 'bold',
  };

  // --- Variant 별 스타일 정의 ---
  const variantStyles: { [key in ButtonVariant]: React.CSSProperties } = {
    login: {
      width: '425px',
      height: '65px',
      borderRadius: '20px',
      backgroundColor: '#5BA5FF',
    },
    auth: {
      width: '245px',
      height: '65px',
      borderRadius: '20px',
      backgroundColor: '#5BA5FF',
    },
    'auth-cancel': {
      width: '164px',
      height: '65px',
      borderRadius: '20px',
      backgroundColor: '#FFFFFF',
      color: '#5BA5FF',
      border: '1px solid #D3D3D3',
    },
    toggle: {
      width: active ? '80px' : '71px', // InActive 상태일 때 너비가 더 김
      height: '33px',
      borderRadius: '10px',
      backgroundColor: active ? 'rgba(211, 211, 211, 0.4)' : 'rgba(91, 165, 255, 0.4)',
      color: '#000000',
    },
    connect: {
      width: '125px',
      height: '43px',
      borderRadius: '10px',
      backgroundColor: '#5BA5FF',
    },
    updateUser: {
      width: '125px',
      height: '43px',
      borderRadius: '10px',
      backgroundColor: '#5BA5FF',
    },
    createRole: {
      width: '125px',
      height: '43px',
      borderRadius: '10px',
      backgroundColor: '#5BA5FF',
    },
    save: {
      width: '139px',
      height: '43px',
      borderRadius: '10px',
      backgroundColor: '#5BA5FF',
    },
  };

  const disabledStyles: React.CSSProperties = props.disabled
    ? {
        opacity: 0.5,
        cursor: 'not-allowed',
      }
    : {};

  // --- 스타일 병합 ---
  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...disabledStyles,
    ...props.style, // 외부에서 주입된 스타일이 있다면 덮어쓰기
  };

  return (
    <button type="button" style={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
