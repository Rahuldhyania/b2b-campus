import React from 'react'
import PageBanner from '../Components/Page-Components/PageBanner'

const page = () => {
    return (
        <div>
            <PageBanner
                banner_title={`Contact us for any inquiries or assistance — we are here to help! <br/>Phone: <a class="text-primary" href="tel:+919878300209">+91 98783 00209</a>, <a class="text-primary" href="tel:+918360116967">+91 83601 16967</a> • <br/>
Email: <a class="text-primary" href="mailto:hello@campus.b2bcampus.com">hello@campus.b2bcampus.com<br/>
</a> •
Address: <span class="text-primary">F-209, Industrial Area Phase 8-B, Sector 74, Mohali, 160074</span>`}
            />
        </div>
    )
}

export default page
