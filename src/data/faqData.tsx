export interface FAQItem {
  title: string;
  content: React.ReactNode;
}

export const faqData: FAQItem[] = [
  {
    title: "Orders & Inquiries",
    content: (
      <div className="space-y-4">
        <p>
            We don&apos;t sell through our website. For orders or inquiries, please contact <a className="hover:opacity-50 transition-opacity" href="mailto:info@bareshells.com">info@bareshells.com</a>.
            A small selection of pieces is available exclusively through <a className="hover:opacity-50 transition-opacity" target="_blank" href="https://maannstudio.com">Maann Studio</a>.
        </p>
      </div>
    ),
  },
  {
    title: "Shipping",
    content: (
      <div className="space-y-4">
        <p>
            We ship worldwide. Shipping costs and delivery timelines vary based on your location and the specific piece.
            You&apos;ll receive tracking details once your order has shipped.
        </p>
      </div>
    ),
  },
  {
    title: "Returns",
    content: (
      <div className="space-y-4">
        <p>
            Returns are not accepted unless the piece arrives damaged or faulty.
            If there&apos;s an issue with your order, please contact us immediately.
        </p>
      </div>
    ),
  },
  {
    title: "Collaborations",
    content: (
      <div className="space-y-4">
        <p>
          We welcome collaboration. For proposals, please email <a className="hover:opacity-50 transition-opacity" href="mailto:info@bareshells.com">info@bareshells.com</a> with your concept or project outline.
        </p>
      </div>
    ),
  },
];
